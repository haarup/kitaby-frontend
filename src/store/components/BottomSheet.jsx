import { SwiperSlide } from "swiper/react";
import Slider from "./Slider";
import { useEffect } from "react";
import PropTypes from "prop-types";
import defaultImg from "../../assets/images/no-img.jpg";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateQuantity } from "../../lib/redux/slices/cartSlice";
const BottomSheet = ({
  isOpen,
  onClose,
  data = [
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
}) => {
  // const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const cartItem = data?.id
    ? cart.items.find((item) => item.id === data.id)
    : null;
  const quantity = cartItem ? cartItem.qty : 0;

  const increaseQuantity = () => {
    if (data?.id) {
      dispatch(updateQuantity({ id: data.id, qty: quantity + 1 }));
    }
  };

  const decreaseQuantity = () => {
    if (data?.id && quantity > 1) {
      dispatch(updateQuantity({ id: data.id, qty: quantity - 1 }));
    }
  };

  useEffect(() => {
    // setQuantity(0);
  }, [onClose]);

  const handleAddToCart = () => {
    // setQuantity(1);
    dispatch(
      addToCart({
        id: data.id,
        name: data.name,
        price: data.price,
        image: data.images[0]?.image,
        compare_price: data.compare_price,
        qty: 1,
      })
    );
  };

  return (
    <div
      className={`fixed inset-0 z-50 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      } transition-opacity duration-300 ease-in-out`}
    >
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>
      <div
        className={`fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-6xl bg-white rounded-t-2xl shadow-lg transition-all duration-500 ease-in-out ${
          isOpen
            ? "translate-y-0 opacity-100 h-[80%]"
            : "translate-y-full opacity-0 h-0"
        } flex flex-col`}
      >
        <div
          onClick={onClose}
          className="p-4 flex justify-between items-center border-b"
        >
          <span className="h-2 w-20 rounded bg-gray-700/10 mx-auto"></span>
        </div>

        {/* محتوى النافذة */}
        <div className="relative h-full px-6 py-8 flex-grow">
          <div className="md:flex justify-end flex-row-reverse">
            {data?.images?.length > 0 && (
              <div className="md:mx-0 mx-auto h-[250px] w-[250px] rounded-3xl border border-gray-700/10 group relative overflow-hidden">
                <img
                  alt="product"
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  src={data.images[0]?.image || defaultImg}
                  onError={(e) => (e.target.src = defaultImg)}
                  style={{
                    color: "transparent",
                  }}
                />
              </div>
            )}

            {data?.images?.length > 1 && (
              <div className="mt-3">
                <Slider
                  className="flex"
                  prevButtonSelector=".custom-prev-button"
                  nextButtonSelector=".custom-next-button"
                  spaceBetween={8}
                  slidesPerView="auto"
                  loop={false}
                >
                  {data.images.map((image, imgIndex) => (
                    <SwiperSlide
                      className="flex"
                      style={{ width: "100px", height: "100px" }}
                      key={imgIndex}
                    >
                      <img
                        alt={`product-${imgIndex}`}
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="product-img object-cover"
                        src={image?.image || defaultImg}
                        onError={(e) => (e.target.src = defaultImg)}
                        style={{
                          color: "transparent",
                        }}
                      />
                    </SwiperSlide>
                  ))}
                </Slider>
                <div className="swbtn-grup">
                  <div className="btn-prev fas fa-chevron-left"></div>
                  <div className="btn-next fas fa-chevron-right"></div>
                </div>
              </div>
            )}

            <div className="flex-1">
              <div className="flex gap-2 items-center mb-4">
                <svg
                  width={16}
                  height={12}
                  viewBox="0 0 16 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.25 6H14.75M1.25 1.5H14.75M1.25 10.5H7.25"
                    stroke="#848484"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Description
              </div>
              <span>{data?.summary || ""}</span>
            </div>
            <div className="absolute bottom-6">
              <div className="relative">
                {quantity >= 1 ? (
                  <div className="h-14 flex items-center justify-between p-1 gap-2 border rounded-full border-base-content/15">
                    <button
                      onClick={increaseQuantity}
                      className="py-2 px-5 h-full bg-blue-500/20 hover:bg-blue-500/25 active:bg-blue-500/15 transition-all text-blue-500 rounded-full"
                    >
                      +
                    </button>
                    <p className="text-base-content/80 mx-1">{quantity}</p>
                    {quantity <= 1 ? (
                      <button
                        onClick={handleAddToCart}
                        className="h-full bg-slate-500/15 hover:bg-slate-500/20 active:bg-slate-500/15 transition-color rounded-full py-3 px-4 text-rose-500"
                      >
                        <div className="w-4 h-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </button>
                    ) : (
                      <button
                        onClick={decreaseQuantity}
                        className="h-full bg-slate-500/15 hover:bg-slate-500/20 active:bg-slate-500/15 transition-color rounded-full py-2 px-5 text-base-content/60"
                      >
                        -
                      </button>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => handleAddToCart()}
                    className="h-14 rounded-full md:w-auto font-semibold flex justify-center items-center text-center gap-2 text-sm text-blue-500 border border-blue-500 active:bg-blue-500/15 hover:bg-blue-500/5 duration-200 transition-all self-start py-3 px-5"
                  >
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
                    <span className="text-center">إضافة للسلة</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BottomSheet.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,

  data: PropTypes.shape({
    compare_price: PropTypes.number,
    created_at: PropTypes.string,
    id: PropTypes.number,
    images: PropTypes.array,
    name: PropTypes.string,
    price: PropTypes.number,
    slug: PropTypes.string,
    status: PropTypes.string,
    summary: PropTypes.string,
    tenant_id: PropTypes.number,
    updated_at: PropTypes.string,
  }),
};

export default BottomSheet;
