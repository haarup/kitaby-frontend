import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { fetchProducts, resetError } from "../../../lib/redux/slices/productFilterSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import axiosInstance from "../../../lib/axios/axiosInstance";
import { setCategoryId } from "../../../lib/redux/slices/categoryIDSlice";

const CategoriesSwiper = () => {
  const dispatch = useDispatch();
  const domain = window.location.hostname.split(".")[0];
  const [categories, setCategories] = useState([]);
  const [loadingCat, setLoadingCat] = useState(true);
  const [categoryId, setCategoryIdr] = useState(null);

  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);

  const fetchCategories = async () => {
    try {
      const response = await axiosInstance.get(`/categories`, {
        headers: {
          "X-Domain": domain,
        },
      });
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingCat(false);
    }
  };
  useEffect(() => {
    fetchCategories();
  }, [dispatch]);

  const handleCategoryClick = (id) => {
    setCategoryIdr(id);
    dispatch(setCategoryId(id));
  };

  return (
    <div className="flex-1 sm:rounded-[74px] sm:border border-[#f5f5f5] flex items-center p-[4px] box-content relative min-w-[200px] select-none">
      <Swiper
        spaceBetween={10}
        slidesPerView="auto"
        slidesPerGroup={3} 
        freeMode={true}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        navigation={{
          prevEl: prevButtonRef.current,
          nextEl: nextButtonRef.current,
        }}
      >
        {loadingCat
          ? Array.from({ length: 10 }).map((_, index) => (
              <SwiperSlide
                key={index}
                className="text-[#B2B2B2] text-[15px] mx-2 font-[600] click transition-all whitespace-nowrap"
              >
                <div className="w-[90px] h-[20px] rounded-[22px] bg-gray-700/10 animate-pulse" />
              </SwiperSlide>
            ))
          : [{ id: "all", name: "الكل" }, ...categories].map(
              (category, index) => (
                <SwiperSlide
                  key={index}
                  className={`${
                    (categoryId === null && category.id === "all") ||
                    categoryId === category.id
                      ? "text-[#0a0a0a] font-bold"
                      : "text-[#B2B2B2]"
                  } text-[15px] mx-2 font-[600] click transition-all whitespace-nowrap`}
                  onClick={() =>
                    handleCategoryClick(
                      category.id === "all" ? null : category.id
                    )
                  }
                >
                  {category.name}
                </SwiperSlide>
              )
            )}
      </Swiper>
      {!loadingCat && (
        <>
          <button
            ref={prevButtonRef}
            className="swiper-button-prev hidden sticky left-[4px] top-[4px] w-[40px] h-[40px] border border-[#f5f5f5] rounded-full flex items-center justify-center bg-white flex-none shadow-3xl click"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 18L4 12M4 12L10 6M4 12H20"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
          <button
            ref={nextButtonRef}
            className="swiper-button-next sticky right-[4px] top-[4px] w-[40px] h-[40px] border border-[#f5f5f5] rounded-full flex items-center justify-center bg-white flex-none shadow-3xl click"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 6L20 12M20 12L14 18M20 12H4"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </>
      )}
    </div>
  );
};

export default CategoriesSwiper;
