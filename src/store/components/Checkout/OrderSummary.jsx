import { useSelector } from "react-redux";

const OrderSummary = () => {
  const cart = useSelector((state) => state.cart.cart);
  const deliveryPrice = 5000;
  const productTotal = cart.items.reduce(
    (total, item) =>
      total + item.qty * (item.price ? item.price : item.compare_price),
    0
  );

  const finalTotal = productTotal + deliveryPrice;

  return (
    <article className="w-full">
      <h2 className="my-5">ملخص الطلب</h2>
      <ul className="flex flex-col gap-4 w-ful">
        <li className="flex w-full justify-between items-center opacity-90">
          <h5 className="text-sm">سعر التوصيل</h5>
          <h4>
            {deliveryPrice.toLocaleString()}
            <span className="text-xs text-blue-500"> د.ع</span>
          </h4>
        </li>
        <li className="flex justify-between items-center opacity-90">
          <h5 className="text-sm">سعر المنتجات</h5>
          <h4>
            {productTotal.toLocaleString()}
            <span className="text-xs text-blue-500"> د.ع</span>
          </h4>
        </li>
        <li className="h-12 flex justify-between items-center font-medium text-lg border-t py-2 border-base-content/10">
          <h5>المجموع</h5>
          <h4>
            {finalTotal.toLocaleString()}
            <span className="text-xs text-blue-500"> د.ع</span>
          </h4>
        </li>
      </ul>
    </article>
  );
};

export default OrderSummary;
