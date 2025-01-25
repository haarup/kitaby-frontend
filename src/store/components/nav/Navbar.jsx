import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchTenantData } from "../../../lib/redux/slices/tenantSlice";
import CategoriesSwiper from "./CategoriesSwiper";
import CartButton from "../Cart/CartButton";
import BtnSidbar from "../sidbar/BtnSidbar";

export default function Navbar() {
  const { loading, data } = useSelector((state) => state.tenant);
  const subdomain = window.location.hostname.split(".")[0];
  const dispatch = useDispatch();

  useEffect(() => {
    if (!subdomain) {
      console.error("Subdomain is missing");
      return;
    }
    dispatch(fetchTenantData(subdomain));
  }, [dispatch]);

  return (
    <nav className="pt-5 pb-4 sm:pt-[28px] sm:pb-[28px] sm:block">
      <div className="lg:mx-auto max-md md:max-w-6xl md:w-full px-4 mx-auto">
        <div className="sm:flex block justify-between items-center gap-4">
          {/* معلومات المتجر */}
          <div className="flex gap-4">
            <div className=" sm:w-[300px] w-full md:w-[393px] sm:rounded-[74px] sm:border border-[#f5f5f5] flex justify-between items-center p-[4px] box-content min-w-[240px] relative bg-white">
              <div
                className="flex gap-2 justify-between items-center w-full"
                style={{ transform: "none", opacity: 1 }}
              >
                <div className="flex items-center gap-2">
                  <div
                    className={`w-[40px] h-[40px] transition-all click rounded-full overflow-hidden bg-[#f6f6f6] ${
                      loading && "bg-gray-700/10 animate-pulse"
                    } flex items-center justify-center font-bold aspect-square`}
                  >
                    {loading ? (
                      <div className="bg-gray-700/10 animate-pulse"></div>
                    ) : (
                      data?.tenant?.shop_logo && (
                        <img
                          className="w-full h-full"
                          src={data.tenant.shop_logo}
                          alt={data.tenant.shop_name || "Shop Logo"}
                        />
                      )
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    {loading ? (
                      <div className="h-5 w-[150px] rounded-[22px] bg-gray-700/10 animate-pulse" />
                    ) : (
                      <b className="text-lg">
                        {data?.tenant?.shop_name || "Shop Name"}
                      </b>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:pr-[16px]">
                  {loading ? (
                    <>
                      <div className="w-[30px] h-[30px] rounded-[22px] bg-gray-700/10 animate-pulse" />
                      <div className="w-[30px] h-[30px] rounded-[22px] bg-gray-700/10 animate-pulse" />
                    </>
                  ) : (
                    <>
                      <button
                        className={`click flex justify-center items-center w-[30px] h-[30px] ${
                          loading && "bg-gray-700/10 animate-pulse"
                        }`}
                      >
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.5 5.16667C0.5 2.58934 2.58934 0.5 5.16667 0.5C7.744 0.5 9.83333 2.58934 9.83333 5.16667C9.83333 7.744 7.744 9.83333 5.16667 9.83333C2.58934 9.83333 0.5 7.744 0.5 5.16667ZM5.16667 2.83333C3.878 2.83333 2.83333 3.878 2.83333 5.16667C2.83333 6.45533 3.878 7.5 5.16667 7.5C6.45533 7.5 7.5 6.45533 7.5 5.16667C7.5 3.878 6.45533 2.83333 5.16667 2.83333Z"
                            fill="#343433"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.5 16.8333C0.5 14.256 2.58934 12.1667 5.16667 12.1667C7.744 12.1667 9.83333 14.256 9.83333 16.8333C9.83333 19.4107 7.744 21.5 5.16667 21.5C2.58934 21.5 0.5 19.4107 0.5 16.8333ZM5.16667 14.5C3.878 14.5 2.83333 15.5447 2.83333 16.8333C2.83333 18.122 3.878 19.1667 5.16667 19.1667C6.45533 19.1667 7.5 18.122 7.5 16.8333C7.5 15.5447 6.45533 14.5 5.16667 14.5Z"
                            fill="#343433"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M16.8333 0.5C14.256 0.5 12.1667 2.58934 12.1667 5.16667C12.1667 7.744 14.256 9.83333 16.8333 9.83333C19.4107 9.83333 21.5 7.744 21.5 5.16667C21.5 2.58934 19.4107 0.5 16.8333 0.5ZM14.5 5.16667C14.5 3.878 15.5447 2.83333 16.8333 2.83333C18.122 2.83333 19.1667 3.878 19.1667 5.16667C19.1667 6.45533 18.122 7.5 16.8333 7.5C15.5447 7.5 14.5 6.45533 14.5 5.16667Z"
                            fill="#343433"
                          ></path>
                          <path
                            d="M13.3333 12.1667C13.9777 12.1667 14.5 12.689 14.5 13.3333V14.5H15.6667C16.311 14.5 16.8333 15.0223 16.8333 15.6667C16.8333 16.311 16.311 16.8333 15.6667 16.8333H13.3333C12.689 16.8333 12.1667 16.311 12.1667 15.6667V13.3333C12.1667 12.689 12.689 12.1667 13.3333 12.1667Z"
                            fill="#343433"
                          ></path>
                          <path
                            d="M16.8333 13.3333C16.8333 12.689 17.3557 12.1667 18 12.1667H20.3333C20.9777 12.1667 21.5 12.689 21.5 13.3333C21.5 13.9777 20.9777 14.5 20.3333 14.5H18C17.3557 14.5 16.8333 13.9777 16.8333 13.3333Z"
                            fill="#343433"
                          ></path>
                          <path
                            d="M16.8333 18C16.8333 17.3557 17.3557 16.8333 18 16.8333H20.3333C20.9777 16.8333 21.5 17.3557 21.5 18C21.5 18.6443 20.9777 19.1667 20.3333 19.1667H19.1667V20.3333C19.1667 20.9777 18.6443 21.5 18 21.5C17.3557 21.5 16.8333 20.9777 16.8333 20.3333V18Z"
                            fill="#343433"
                          ></path>
                          <path
                            d="M13.3333 21.5C13.9777 21.5 14.5 20.9777 14.5 20.3333C14.5 19.689 13.9777 19.1667 13.3333 19.1667C12.689 19.1667 12.1667 19.689 12.1667 20.3333C12.1667 20.9777 12.689 21.5 13.3333 21.5Z"
                            fill="#343433"
                          ></path>
                        </svg>
                      </button>
                      <button
                        className={`click flex justify-center items-center w-[30px] h-[30px]`}
                      >
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20.3332 20.3333L15.7248 15.725M17.9998 9.83332C17.9998 14.3436 14.3435 18 9.83317 18C5.32285 18 1.6665 14.3436 1.6665 9.83332C1.6665 5.323 5.32285 1.66666 9.83317 1.66666C14.3435 1.66666 17.9998 5.323 17.9998 9.83332Z"
                            stroke="#343433"
                            strokeWidth="2"
                            strokeLinecap="round"
                          ></path>
                        </svg>
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <CategoriesSwiper />
          <CartButton />
          {/* <BtnSidbar /> */}
        </div>
      </div>
    </nav>
  );
}
