import { createContext, useState, useContext, useEffect, useMemo } from "react";

const CartContext = createContext(null);

const getInitialCart = () => {
  try {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  } catch (error) {
    console.error("Error parsing cart from localStorage:", error);
    return [];
  }
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(getInitialCart());

  /** Persist cart changes in localStorage */
  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
      console.error("Error saving cart to localStorage:", error);
    }
  }, [cart]);


  // Add a product to the cart. If it already exists, increase quantity.
  const addToCart = (product) => {
    if (!product?.id || typeof product.price !== "number") {
      console.error("Invalid product", product);
      return;
    }
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        // If item already exists, increase quantity
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      // Add new item with quantity 1. Remember, quantity was not part of product object. So we add a property called quantity.
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };


  // Remove a product from the cart by its ID
  const removeFromCart = (productId) => {
    if (!productId) return;
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };


  // Update the quantity of a specific cart item based on action (increase/decrease)
  const updateCartItem = (productId, action) => {
    if (!productId) {
      console.error("updateCartItem called without a valid productId");
      return;
    }
    setCart((prevCart) => {
      if (!Array.isArray(prevCart)) {
        console.error("Cart state is not an array:", prevCart);
        return prevCart; // fail gracefully
      }
      const updatedCart = prevCart.map((item) => {
        if (item.id !== productId) return item; // leave unchanged

        let updatedQuantity = item.quantity;

        switch (action) {
          case "increase":
            updatedQuantity += 1;
            break;
          case "decrease":
            updatedQuantity = Math.max(item.quantity - 1, 1); // prevent below 1
            break;
          default:
            console.warn(`Unknown cart action: ${action}`);
            return item; // fallback, return unchanged
        }

        // Return the updated specific item within the cart with new quantity
        return { ...item, quantity: updatedQuantity };
      });

      // Return the updated entire cart
      return updatedCart;
    });
  };

  // Clear the entire cart
  const clearCart = () => setCart([]);

 // Calculate total items and total price 
  const totalItems = useMemo(
    () => cart.reduce((total, item) => total + item.quantity, 0),
    [cart],
  );


  // Calculate total price with two decimal places as a number
  const totalPrice = useMemo(() => {
    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
    return Number(total.toFixed(2)); // ensures two decimal places as a number
  }, [cart]);

  /** Memoize context value to prevent unnecessary re-renders */
  const contextValue = useMemo(
    () => ({
      cart,
      addToCart,
      removeFromCart,
      updateCartItem,
      clearCart,
      totalItems,
      totalPrice,
    }),
    [cart, totalItems, totalPrice],
  );

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
