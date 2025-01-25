import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { LogoutIcon } from "../assets/icons/CustomIcons";
import Cookies from "universal-cookie";

const Items = ({ text, onClick = {} }) => {
  return (
    <div className="sidbar-item border-b" onClick={onClick}>
      {text}
    </div>
  );
};

const Logout = ({ text, icon, onClick = {} }) => {
  return (
    <div
      className="sidbar-item absolute bottom-0 bg-[var(--gray-light)]"
      onClick={onClick}
    >
      {icon}
      {text}
    </div>
  );
};

const Sidbar = () => {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const [data, setData] = useState([]);
  const handleNavigation = (path) => {
    navigate(path);
  };

  const deleteToken = () => {
    cookies.remove("token", { path: "/" });
    navigate("/login");
  };

  return (
    <div className="relative bg-white w-80 border-l">
      <div className="border-b py-4 px-4 flex justify-start items-center gap-3">
        <div className="w-[50px] h-[50px] transition-all click rounded-full overflow-hidden bg-[#f6f6f6] flex items-center justify-center font-bold">
          {data?.tenant?.shop_logo ? (
            <img
              className="w-full h-full"
              src={data.tenant.shop_logo}
              alt={data.tenant.shop_name || "Shop Logo"}
            />
          ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
            />
          </svg>
          )}
        </div>
        <h1 className="font-medium truncatey">{data?.name || "Name Store"}</h1>
      </div>
      <Items text="الصفحة الرئيسية" onClick={() => handleNavigation("")} />
      <Items
        text="أدارة الأقسام"
        onClick={() => handleNavigation("cats/management")}
      />
      <Items
        text="ادارة الباصات"
        onClick={() => handleNavigation("Bus/management")}
      />
      <Logout
        text="تسجيل الخروج"
        // icon={<LogoutIcon className="text-red-600" />}
        onClick={deleteToken}
      />
    </div>
  );
};

export default Sidbar;
