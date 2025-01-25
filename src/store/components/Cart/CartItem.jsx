import { useState } from "react";
import { useDispatch } from "react-redux";
import defaultImg from "../../../assets/images/no-img.jpg";
import { updateQuantity } from "../../../lib/redux/slices/cartSlice";
import PropTypes from "prop-types";

const CartItem = ({
  product = [
    {
      id: null,
      name: null,
      price: null,
      images: null,
      compare_price: null,
      qty: null,
    },
  ],
  btn = true
}) => {
  const dispatch = useDispatch();
  const qty = product.qty;
  const [quantity, setQuantity] = useState(qty);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    dispatch(updateQuantity({ id: product.id, qty: qty + 1 }));
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      dispatch(updateQuantity({ id: product.id, qty: qty - 1 }));
    }
  };

  return (
    <li className="flex flex-col md:flex-row items-center justify-between p-4 border rounded-3xl w-full border-base-content/10">
      <div className="flex items-start gap-4 w-full">
        <div className="min-h-20 relative border border-base-content/10 min-w-20 h-20 w-20 lg:h-24 lg:w-24 skeleton rounded-2xl lg:rounded-3xl overflow-hidden">
          <img
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover"
            src={product.image || defaultImg}
          />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-lg line-clamp-2">{product.name}</h3>
          <h5 className="flex gap-1">
            {product.price ? (
              <span className="flex gap-2">
                <span className="text-rose-600/90 line-through leading-3 flex items-center gap-1 font-normal">
                  {product.compare_price}
                </span>
                <span className="text-lg font-medium">
                  {product.price.toLocaleString()}
                </span>
              </span>
            ) : (
              <span>{product.price.toLocaleString()}</span>
            )}
            <span className="text-blue-500 text-sm font-normal translate-y-1">
              د.ع
            </span>
          </h5>
        </div>
      </div>
      {btn && <div className="flex flex-col gap-3 w-full md:mt-0 mt-2 md:w-auto">
        <div className="flex justify-between items-center p-1 gap-2 border rounded-full border-base-content/15">
          <button
            onClick={increaseQuantity}
            className="py-1 px-4 bg-blue-500/20 hover:bg-blue-500/25 active:bg-blue-500/15 transition-all text-blue-500 rounded-full"
          >
            +
          </button>
          <p className="text-base-content/80">{qty}</p>
          <button
            onClick={decreaseQuantity}
            className="transition-colors rounded-full py-1 px-4 text-slate-500 bg-slate-500/15 hover:bg-slate-500/20 active:bg-slate-500/15"
          >
            -
          </button>
        </div>
      </div>}
    </li>
  );
};

CartItem.propTypes = {
  onClick: PropTypes.func,
  btn: PropTypes.bool,
  product: PropTypes.shape({
    compare_price: PropTypes.number,
    id: PropTypes.number,
    images: PropTypes.array,
    name: PropTypes.string,
    price: PropTypes.number,
    slug: PropTypes.string,
    status: PropTypes.string,
    summary: PropTypes.string,
    tenant_id: PropTypes.number,
  }),
};

export default CartItem;
