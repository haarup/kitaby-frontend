import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CartButton = () => {
  const cart = useSelector((state) => state.cart.cart);
  const navigate = useNavigate();
  return (
    cart.totalQuantity > 0 && (
      <div
        className="cursor-pointer rounded-[74px] border border-[#f5f5f5] py-2 px-4 flex items-center hover:bg-blue-500/10 transition-all gap-1"
        onClick={() => navigate("/cart")}
      >
        <span className="h-6 w-auto p-1 text-center text-xs rounded-full bg-rose-600 text-white">
          {cart.totalQuantity}
        </span>
        <svg
          fill="none"
          height={24}
          viewBox="0 0 24 24"
          width={24}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.087 7c1.263 0 2.589.91 3.057 3.12l.77 6.195C21.478 20.353 19.206 22 16.157 22h-8.29c-3.057 0-5.4-1.137-4.763-5.685l.778-6.195C4.28 7.846 5.65 7 6.932 7h10.155zm-7.99 3.33a.897.897 0 00-.884.909c0 .502.396.91.884.91a.897.897 0 00.884-.91l-.007-.114a.893.893 0 00-.877-.796zm5.789 0a.897.897 0 00-.884.909c0 .502.396.91.884.91a.897.897 0 00.884-.91.897.897 0 00-.884-.91z"
            fill="#068df1"
          />
          <path
            d="M16.974 6.774A.502.502 0 0116.93 7h-1.437a.648.648 0 01-.043-.226 3.478 3.478 0 00-3.484-3.472 3.478 3.478 0 00-3.484 3.472.649.649 0 010 .226H7.01a.649.649 0 010-.226A4.992 4.992 0 0112.005 2 4.992 4.992 0 0117 6.774h-.026z"
            fill="#068df1"
            opacity="0.4"
          />
        </svg>
      </div>
    )
  );
};

export default CartButton;
