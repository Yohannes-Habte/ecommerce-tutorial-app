import { useCart } from "../../context/CartProvider";
import { typography } from "../../styles/uiConfig";
import Button from "../common/Button";
import { FiTrash2 } from "react-icons/fi";

const CartCard = ({ product }) => {
  const { removeFromCart, updateCartItem } = useCart();

  return (
    <div className="flex items-center justify-between gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
      {/* Product Info */}
      <div className="flex items-center gap-4 flex-1">
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.title}
          className="w-20 h-20 object-contain rounded-xl border border-gray-200 p-1"
        />

        {/* Product Details */}
        <div className="flex flex-col">
          <h3 className={`${typography.subtitle} text-gray-800`}>
            {product.title}
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            ${product.price} × {product.quantity}
          </p>

          <p className="text-sm font-semibold text-indigo-600 mt-1">
            Total: ${(product.price * product.quantity).toFixed(2)}
          </p>
        </div>
      </div>

      {/* Quantity Controls + Remove */}
      <div className="flex items-center gap-3">
        {/* Quantity Controls */}
        <div className="flex items-center gap-2 bg-gray-100 rounded-full px-2 py-1">
          <Button
            variant="secondary"
            size="sm"
            rounded="full"
            className="w-8 h-8 flex items-center justify-center"
            onClick={() => updateCartItem(product.id, "decrease")}
          >
            –
          </Button>

          <span className="min-w-[24px] text-center font-medium text-gray-700">
            {product.quantity}
          </span>

          <Button
            variant="secondary"
            size="sm"
            rounded="full"
            className="w-8 h-8 flex items-center justify-center"
            onClick={() => updateCartItem(product.id, "increase")}
          >
            +
          </Button>
        </div>

        {/* Remove Button */}
        <Button
          variant="removeFromCart"
          size="sm"
          rounded="full"
          className="p-2 hover:bg-red-50 transition"
          onClick={() => removeFromCart(product.id)}
        >
          <FiTrash2 size={18} className="text-red-500" />
        </Button>
      </div>
    </div>
  );
};

export default CartCard;
