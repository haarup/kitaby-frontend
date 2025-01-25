import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import OrderSummary from "./OrderSummary";
import CartItem from "../Cart/CartItem";
import CreateOrder from "./CreateOrder";
const Checkout = () => {
  const cart = useSelector((state) => state.cart.cart);

  if (!cart || cart.items.length === 0) {
    return <Navigate to="/" replace />;
  }

  return (
    <main
      dir="rtl"
      className="min-h-[100svh] min-w-screen relative ms:pt-40 pt-6 pb-8 z-10"
    >
      <div className="mx-auto flex flex-col gap-8 p-4 md:flex-row container md:justify-between items-stretch pt-40 pb-16 justify-center">
        <section className="md:w-2/4 w-full flex flex-col gap-8">
          <h2 className="text-2xl font-semibold">معلومات مستلم الطلب</h2>
          <CreateOrder />
        </section>
        <section className="w-full hidden flex-1 md:block ">
          <div className="h-full flex flex-col justify-between items-start gap-8">
            <section className="w-full ">
              <ul className="flex flex-col rounded-3xl gap-4 max-h-72 overflow-y-scroll hide-scrollbar border-b border-yellow-500/40">
              {cart.items.length > 0 && (
                cart.items.map((product) => (
                  <CartItem key={product.id} product={product} btn={false} />
                ))
              )}
              </ul>
            </section>
            <OrderSummary />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Checkout;
