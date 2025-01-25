import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const CartSummary = () => {
    const navigate = useNavigate();
  
  const cart = useSelector((state) => state.cart.cart);
  const deliveryPrice = 5000;
  const productTotal = cart.items.reduce(
    (total, item) => total + item.qty * (item.price ? item.price : item.compare_price),
    0
  );

  const finalTotal = productTotal + deliveryPrice;
  return (
    <article className="w-full md:w-1/3 relative">
      <div
        className="flex items-center transition-all duration-300 ease-out gap-2 justify-center w-full py-3 rounded-xl font-semibold bg-amber-400 absolute top-0 left-0 z-50 translate-y-20 opacity-0"
        role="alert"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
          data-slot="icon"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
          />
        </svg>
        <span>يرجى حذف المنتجات المنتهية من السلة</span>
      </div>
      <div className="flex gap-2 w-full">
        <label className="input px-4 w-full border flex items-center gap-2 rounded-full">
          <svg
            fill="none"
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M21.009 13.212a1.734 1.734 0 000-2.425l-1.01-1.045a.735.735 0 01-.2-.619L20 7.684a1.735 1.735 0 00-1.424-1.96l-1.43-.25a.744.744 0 01-.53-.387l-.68-1.283a1.737 1.737 0 00-2.305-.748l-1.306.638a.74.74 0 01-.652 0l-1.307-.638a1.737 1.737 0 00-2.304.75l-.68 1.281a.744.744 0 01-.528.385l-1.432.251a1.734 1.734 0 00-1.424 1.961l.203 1.44a.742.742 0 01-.202.62l-1.01 1.043a1.735 1.735 0 000 2.425L4 14.257c.16.165.235.39.202.62l-.203 1.436a1.738 1.738 0 001.424 1.963l1.432.251a.745.745 0 01.527.382l.68 1.284a1.737 1.737 0 002.306.75l1.306-.638a.74.74 0 01.652 0l1.306.637a1.736 1.736 0 002.305-.749l.68-1.283a.749.749 0 01.529-.383l1.43-.252a1.736 1.736 0 001.425-1.96l-.203-1.44a.731.731 0 01.202-.619l1.009-1.044z"
              fill="#58B3F4"
              fillRule="evenodd"
              opacity="0.4"
            />
            <path
              d="M13.435 14.384a.947.947 0 001.893 0 .947.947 0 00-1.893 0zM9.605 15.202a.744.744 0 00.53-.22l4.898-4.897a.75.75 0 10-1.06-1.06l-4.898 4.897a.749.749 0 00.53 1.28zM10.564 9.618a.947.947 0 10-1.894.001.947.947 0 001.894-.001z"
              fill="#58B3F4"
            />
          </svg>
          <input
            className="w-2/3 uppercase grow font-medium"
            placeholder="اكتب كود الخصم هنا"
            type="text"
          />
        </label>
        <button className="bg-blue-500 hover:bg-blue-600 active:bg-blue-500 transition-all py-2 px-4 rounded-full text-white">
          تطبيق
        </button>
      </div>
      <div className="border border-base-content/10 rounded-3xl p-4 mt-4">
        <h2 className="mb-5">ملخص الطلب</h2>
        <ul className="flex flex-col gap-4">
          <li className="flex justify-between items-center">
            <h5>سعر التوصيل</h5>
            <h4 className="font-medium">
              {deliveryPrice.toLocaleString()}{" "}
              <span className="text-sm font-normal text-blue-500">د.ع</span>
            </h4>
          </li>
          <li className="flex justify-between items-center">
            <h5>سعر المنتجات</h5>
            <h4 className="font-medium">
              {productTotal.toLocaleString()}{" "}
              <span className="text-sm font-normal text-blue-500">د.ع</span>
            </h4>
          </li>
          <li className="flex justify-between items-center">
            <h5 className="font-boldtotalQuantity">المجموع</h5>
            <h4 className="font-bold">
              {finalTotal.toLocaleString()}{" "}
              <span className="text-sm font-bold text-blue-500">د.ع</span>
            </h4>
          </li>
        </ul>
        <button className="w-full btn-primary btn-glow mt-5" onClick={()=> navigate("/checkout")}>شراء الان</button>
      </div>
    </article>
  );
};

export default CartSummary;
