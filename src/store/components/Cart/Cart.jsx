import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../../lib/redux/slices/cartSlice";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import CartEmptyMessage from "./CartEmptyMessage";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <main
      dir="rtl"
      className="min-h-[100svh] min-w-screen relative ms:pt-40 pt-6 pb-8 z-10"
    >
      <div className="mx-auto flex flex-col gap-3 container p-4">
        <section className="flex items-center w-full justify-between">
          <button className="self-start" onClick={() => navigate("/")}>
            عودة
          </button>

          <div className="flex-auto text-center">
            <h1 className="text-4xl font-bold mb-1">السلة</h1>
            <p className="text-base-content/60 font-light">الرئيسية/ السلة</p>
          </div>
        </section>
        {cart.items.length > 0 ? (
          <div className="flex flex-col md:flex-row items-start gap-8 my-8">
            <section className="w-full md:w-2/3 relative min-h-[30vh]">
              <div className="space-y-4">
                {cart.items.length > 0 ? (
                  cart.items.map((product) => (
                    <CartItem key={product.id} product={product} />
                  ))
                ) : (
                  <li className="w-full text-center p-4">
                    لا توجد منتجات في السلة
                  </li>
                )}

                <button
                  className="py-2 flex items-center mx-auto gap-2 transition-all px-8 rounded-full bg-orange-500/15 active:bg-orange-500/15 hover:bg-orange-500/20 text-orange-500"
                  onClick={handleClearCart}
                >
                  تفريغ السلة
                  <div className="w-4 h-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </section>
            <CartSummary />
          </div>
        ) : (
          <CartEmptyMessage />
        )}
      </div>
    </main>
  );
};

export default Cart;
