import { useNavigate } from "react-router-dom";
import { typography, pageLayout } from "../../styles/uiConfig";
import Button from "../../components/common/Button";
import { useCart } from "../../context/CartProvider";
import CartCard from "../../components/cart/CartCard";

const CartPage = () => {
  const navigate = useNavigate();
  const { cart, totalPrice } = useCart();

  return (
    <main className={pageLayout.page}>
      {cart.length === 0 ? (
        <section
          className={`${pageLayout.mainSection} } min-h-screen flex flex-col items-center justify-center text-center`}
        >
          <h2 className={typography.title}>Your Cart is Empty 🛒</h2>
          <p className={`${typography.paragraph}`}>
            Looks like you haven’t added anything to your cart yet. Explore our
            products and find something you’ll love!
          </p>
          <Button
            variant="primary"
            size="lg"
            rounded="md"
            onClick={() => navigate("/")}
          >
            Shop Now
          </Button>
        </section>
      ) : (
        <section className={`${pageLayout.mainSection}`}>
          {/* Page Title */}
          <h2 className={typography.title}>Shopping Cart</h2>

          {/* Cart Items using CartCard component */}
          <div className={`flex flex-col gap-2 mb-8`}>
            {cart &&
              cart.map((item) => <CartCard key={item.id} product={item} />)}
          </div>

          {/* Cart Summary */}
          <div>
            <h3 className={typography.subtitle}>
              Total: <span className="text-indigo-600">${totalPrice}</span>
            </h3>
            <Button
              variant="primary"
              size="lg"
              rounded="md"
              onClick={() => navigate("/checkout")}
            >
              Proceed to Checkout
            </Button>
          </div>
        </section>
      )}
    </main>
  );
};

export default CartPage;
