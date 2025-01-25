import PropTypes from "prop-types";
import defaultImg from "../../../assets/images/no-img.jpg";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../lib/redux/slices/cartSlice";
import { toast } from "sonner";
const Card = ({
  product = [
    {
      compare_price: null,
      created_at: null,
      id: null,
      images: null,
      name: null,
      price: null,
      slug: null,
      status: null,
      summary: null,
      tenant_id: null,
      updated_at: null,
    },
  ],
  onClick,
}) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0]?.image,
        compare_price: product.compare_price,
        qty: 1,
      })
    );
    toast.success("تمت الأضافة بنجاح");
  };

  return (
    <div className="">
      <div className="relative rounded-[26px] transition-all duration-150">
        <div className="img relative">
          {/* <div className="absolute bottom-[14px] gap-2 flex-nowrap text-nowrap text-xs md:text-base left-[14px] z-10 text-[16px] h-[31px] pl-2 pr-2 text-white rounded-[10px] flex justify-center items-center bg-red-500">
            <svg
              width={14}
              height={14}
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.666748 2C0.666748 1.26362 1.2637 0.666664 2.00008 0.666664H3.58587C3.93949 0.666664 4.27863 0.80714 4.52868 1.05719L6.94534 3.47386C7.46604 3.99455 7.46604 4.83877 6.94534 5.35947L5.35956 6.94526C4.83886 7.46596 3.99464 7.46596 3.47394 6.94526L1.05727 4.52859C0.807224 4.27854 0.666748 3.93941 0.666748 3.58578V2ZM2.50008 3C2.77622 3 3.00008 2.77614 3.00008 2.5C3.00008 2.22386 2.77622 2 2.50008 2C2.22394 2 2.00008 2.22386 2.00008 2.5C2.00008 2.77614 2.22394 3 2.50008 3Z"
                fill="white"
              />
            </svg>
            <span>20% OFF</span>
          </div> */}
          <div className="relative w-full h-full" style={{ opacity: 1 }}>
            {/* <button className="w-10 h-10 z-20 rounded-full bg-white/20 backdrop-blur-md absolute p-2 top-4 left-4 transition-all ease-in-out duration-75 text-black/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
            </button> */}

            {product?.images?.[0]?.image ? (
              <div className="group relative overflow-hidden" onClick={onClick}>
                <img
                  draggable="false"
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  alt={product?.name || ""}
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  src={product.images[0]?.image || defaultImg}
                  onError={(e) => (e.target.src = defaultImg)}
                />
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <span>No Image</span>
              </div>
            )}
          </div>
        </div>
        <h1 className="mt-3 mb-4 text-lg sm:text-xl font-medium text-right truncatey">
          {product?.name}
        </h1>
      </div>

      {/*  */}
      <div className="flex flex-col-reverse gap-3 w-full bottom-1 right-0 justify-between">
        <div className="flex justify-between">
          <div className="flex flex-col justify-between">
            <p className="text-rose-600/90 line-through leading-3 flex items-center gap-1">
              {product?.compare_price}
            </p>
            <div className="text-lg sm:text-2xl line-clamp-1 font-medium flex items-center gap-1">
              <h5 className="flex gap-2">
                {new Intl.NumberFormat("en-IQ").format(product?.price)}
              </h5>
              <span className="text-medium text-sm text-base-content/50">
                د.ع
              </span>
            </div>
          </div>
          <button
            className="rounded-full md:w-auto min-w-[45px] h-[45px] w-10 font-semibold flex justify-center items-center gap-1 text-sm text-blue-500 border border-blue-500 active:bg-blue-500/15 hover:bg-blue-500/5  duration-200 transition-all self-start py-3 px-5"
            onClick={handleAddToCart}
          >
            <span className="md:block hidden">اضافة للسلة</span>
            <div className="md:hidden flex">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                height={24}
                width={24}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.087 7c1.263 0 2.589.91 3.057 3.12l.77 6.195C21.478 20.353 19.206 22 16.157 22h-8.29c-3.057 0-5.4-1.137-4.763-5.685l.778-6.195C4.28 7.846 5.65 7 6.932 7h10.155zm-7.99 3.33a.897.897 0 00-.884.909c0 .502.396.91.884.91a.897.897 0 00.884-.91l-.007-.114a.893.893 0 00-.877-.796zm5.789 0a.897.897 0 00-.884.909c0 .502.396.91.884.91a.897.897 0 00.884-.91.897.897 0 00-.884-.91z"
                  fill="#0492F6"
                />
                <path
                  d="M16.974 6.774A.502.502 0 0116.93 7h-1.437a.648.648 0 01-.043-.226 3.478 3.478 0 00-3.484-3.472 3.478 3.478 0 00-3.484 3.472.649.649 0 010 .226H7.01a.649.649 0 010-.226A4.992 4.992 0 0112.005 2 4.992 4.992 0 0117 6.774h-.026z"
                  fill="#0492F6"
                  opacity="0.4"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  onClick: PropTypes.func,
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

export default Card;
