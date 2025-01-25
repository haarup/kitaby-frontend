import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";

const AuthButtons = ({ setActiveTab, activeTab }) => {
  const { "*": url } = useParams();
  const navigate = useNavigate();

  const handleTabChange = (tab) => {
    navigate(`/${tab}`);
    setActiveTab(tab);
  };

  useEffect(() => {
    if (url === "register" && activeTab !== "register") {
      setActiveTab("register");
    } else if (url === "login" && activeTab !== "login") {
      setActiveTab("login");
    }
  }, [url, activeTab, setActiveTab]);

  return (
    <div className="mx-auto inline-flex p-1 self-start rounded-full text-center border border-base-content/10">
      <button
        onClick={() => handleTabChange("register")}
        className={`px-6 py-3 text-xs font-medium rounded-full ${
          activeTab === "register" ? "text-blue-500 bg-blue-500/10" : ""
        }`}
      >
        انشاء حساب جديد
      </button>
      <button
        onClick={() => handleTabChange("login")}
        className={`px-6 py-3 text-xs font-medium rounded-full ${
          activeTab === "login" ? "text-blue-500 bg-blue-500/10" : ""
        }`}
      >
        تسجيل الدخول
      </button>
    </div>
  );
};

AuthButtons.propTypes = {
  setActiveTab: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired,
};

export default AuthButtons;
