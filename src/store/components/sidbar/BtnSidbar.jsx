import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const BtnSidbar = () => {
  const navigate = useNavigate();
  return (
    <div
      className="cursor-pointer w-[40px] h-[40px] border border-[#f5f5f5] rounded-full flex items-center justify-center bg-white flex-none shadow-3xl click hover:bg-blue-500/10 transition-all gap-1"
      onClick={() => navigate("/cart")}
    >
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
          d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
        />
      </svg>
    </div>
  );
};

export default BtnSidbar;
