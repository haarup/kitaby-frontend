import { useState } from "react";
import { DomainIcon, StoreIcon, UserIcon } from "../assets/SVG/CustomIcons";
import axiosInstance from "../lib/axios/axiosInstance";
import AuthButtons from "./components/AuthButtons";
import Spinner from "../components/Spinner/Spinner";
import { toast } from "sonner";
const Register = () => {
  const [activeTab, setActiveTab] = useState("register");
  const [loding, setLoding] = useState(false);
  const [error, setError] = useState("");

  const token = localStorage.getItem("authToken");

  const [formData, setFormData] = useState({
    name: "",
    shop_name: "",
    phone: "",
    domain: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoding(true);
    try {
      const response = await axiosInstance.post(
        activeTab === "register" ? "/store/register" : "/store/login",
        formData
      );
      localStorage.setItem("authToken", response.data.token);
      navigator('/');
    } catch (error) {
      if (error.status === 422) {
        setError(error);
        toast.error("حدث خطأ أثناء حذف المنتج.");
      }
      if (error.status === 401) {
        if (token) {
          localStorage.removeItem("authToken");
        }
      }
      setLoding(false);
    } finally {
      setLoding(false);
    }
  };
  return (
    <div className="bg-[#F5F5F5] h-[100svh] w-full pb-6 pt-8 px-4 ">
      <section
        dir="rtl"
        className="mx-auto md:w-2/4 min-w-md flex flex-col justify-center items-center gap-8"
      >
        <AuthButtons setActiveTab={setActiveTab} activeTab={activeTab} />
        {activeTab === "register" ? (
          <>
            <h1 className="text-4xl text-center font-semibold">
              أنشئ متجرك الإلكتروني الآن وابدأ إدارة أعمالك بكل سهولة
            </h1>
            <p className="opacity-60">
              احصل على منصة متكاملة لإنشاء وإدارة متجرك الإلكتروني. استمتع
              بالأدوات القوية التي تساعدك في التوسع وتنظيم العمليات، كل ذلك في
              مكان واحد.
            </p>
          </>
        ) : (
          <>
            <h1 className="text-4xl text-center font-semibold">
              مرحبًا بك مجددًا!
            </h1>
            <p className="opacity-60">
              قم بتسجيل الدخول للوصول إلى متجرك وإدارة أعمالك.
            </p>
          </>
        )}

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full max-w-lg translate-y-[-1rem]"
        >
          {/* user name */}
          {activeTab === "register" && (
            <div className="border flex items-center gap-4 w-full h-auto py-3 px-5 rounded-3xl">
              <UserIcon />
              <label className="flex flex-col gap-1 w-full " htmlFor="name">
                <p className="text-xs font-light">الاسم الكامل</p>
                <input
                  autoComplete="off"
                  id="name"
                  className="w-full grow text-md bg-transparent"
                  disabled={loding}
                  placeholder="الرجاء قم بكتابة الاسم الكامل"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </label>
            </div>
          )}
          {/* name store */}
          {activeTab === "register" && (
            <div className="border flex items-center gap-4 w-full h-auto py-3 px-5 rounded-3xl">
              <StoreIcon />
              <label
                className="flex flex-col gap-1 w-full "
                htmlFor="shop_name"
              >
                <p className="text-xs font-light">اسم المتجر</p>
                <input
                  autoComplete="off"
                  id="shop_name"
                  disabled={loding}
                  className="w-full grow text-md bg-transparent"
                  placeholder="الرجاء قم بكتابة أسم المتجر"
                  type="text"
                  name="shop_name"
                  value={formData.shop_name}
                  onChange={handleChange}
                />
              </label>
            </div>
          )}
          {/* phone number */}
          <div className="border flex items-center gap-4 w-full h-auto py-3 px-5 rounded-3xl">
            <svg
              fill="none"
              height={24}
              viewBox="0 0 24 24"
              width={24}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M14.748 2.5h-5.5a4.104 4.104 0 00-4.1 4.099V17.4c0 2.261 1.84 4.1 4.1 4.1h5.5c2.261 0 4.1-1.839 4.1-4.1V6.599a4.104 4.104 0 00-4.1-4.099z"
                fill="#58B3F4"
                fillRule="evenodd"
                opacity="0.4"
              />
              <path
                clipRule="evenodd"
                d="M13.402 7.45h-2.8a.75.75 0 010-1.5h2.8a.75.75 0 010 1.5zm-1.4 10.7a.94.94 0 01-.95-.95c0-.544.502-.95.95-.95.448 0 .95.406.95.95 0 .544-.502.95-.95.95z"
                fill="#58B3F4"
                fillRule="evenodd"
              />
            </svg>
            <label className="flex flex-col gap-1 w-full" htmlFor="phone">
              <p className="text-xs font-light">رقم الهاتف</p>
              <input
                autoComplete="off"
                id="phone"
                disabled={loding}
                className="grow text-md w-4/5 bg-transparent"
                placeholder="يجب أن يبدأ بـ '07'"
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          {/* domain */}
          {activeTab === "register" && (
            <div className="border flex items-center gap-4 w-full h-auto py-3 px-5 rounded-3xl">
              <DomainIcon />
              <label className="flex flex-col gap-1 w-full" htmlFor="domain">
                <p className="text-xs font-light">الدومين</p>
                <input
                  autoComplete="off"
                  id="domain"
                  disabled={loding}
                  className="w-full grow text-md bg-transparent"
                  placeholder="اكتب اسم الدومين الذي تريده، مثل: books"
                  type="text"
                  name="domain"
                  value={formData.domain}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
          )}
          {/* password */}
          <div className="border flex items-center gap-4 w-full h-auto py-3 px-5 rounded-3xl">
            <svg
              fill="none"
              height={24}
              viewBox="0 0 24 24"
              width={24}
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                clipRule="evenodd"
                fill="#58B3F4"
                fillRule="evenodd"
                opacity="0.4"
              >
                <path d="M17.883 10.885a.285.285 0 00-.362.281v.285a3.51 3.51 0 01-3.502 3.51H9.985a3.51 3.51 0 01-3.503-3.51v-.286a.285.285 0 00-.362-.281c-2.216.646-3.62 2.604-3.62 5.288 0 3.302 2.123 5.52 5.282 5.52h8.434c3.16 0 5.284-2.218 5.284-5.52 0-2.683-1.403-4.64-3.617-5.287z" />
                <path d="M16.52 9.188v2.26c0 1.39-1.12 2.51-2.5 2.51H9.98c-1.38 0-2.5-1.12-2.5-2.51v-2.26c0-.96.55-1.81 1.36-2.22.34-.18.73-.28 1.14-.28h4.04c.41 0 .8.1 1.14.28.81.41 1.36 1.26 1.36 2.22z" />
              </g>
              <path
                clipRule="evenodd"
                d="M8.036 18.189h-.079a.75.75 0 010-1.5c.414 0 .789.335.789.75 0 .413-.296.75-.71.75zM12.056 18.189h-.08a.75.75 0 010-1.5c.415 0 .79.335.79.75 0 .413-.296.75-.71.75zM16.126 18.189h-.08a.75.75 0 010-1.5c.415 0 .79.335.79.75 0 .413-.296.75-.71.75zM12.004 11.512a.75.75 0 01-.75-.75v-.88a.75.75 0 011.5 0v.88a.75.75 0 01-.75.75zM15.16 6.077v.89c-.34-.18-.73-.28-1.14-.28h-.36v-.6c-.01-.89-.76-1.63-1.67-1.63h-.01c-.9.02-1.62.74-1.64 1.64v.59h-.36c-.41 0-.8.1-1.14.28v-.89c.03-1.72 1.4-3.09 3.12-3.12h.03c1.73 0 3.15 1.4 3.17 3.12z"
                fill="#58B3F4"
                fillRule="evenodd"
              />
            </svg>
            <label className="flex flex-col gap-1 w-full" htmlFor="password">
              <p className="text-xs font-light">كلمة المرور</p>
              <input
                autoComplete="off"
                id="password"
                disabled={loding}
                className="w-full grow text-md bg-transparent"
                placeholder="احرف كبيرة وصغيرة، اشكال خاصة، ارقام"
                value={formData.password}
                onChange={handleChange}
                type="password"
                name="password"
              />
            </label>
            <button>
              <svg
                fill="none"
                height={24}
                viewBox="0 0 24 24"
                width={24}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M12.003 15.83A3.833 3.833 0 018.176 12a3.828 3.828 0 017.653 0 3.832 3.832 0 01-3.826 3.83zm9.457-4.028c-1.993-4.636-5.53-7.404-9.462-7.404-3.93 0-7.465 2.768-9.457 7.404a.491.491 0 000 .394c1.991 4.634 5.526 7.402 9.456 7.404h.006c3.93-.002 7.465-2.77 9.457-7.404a.5.5 0 000-.394z"
                  fill="#B2B9CC"
                  fillRule="evenodd"
                  opacity="0.4"
                />
                <path
                  clipRule="evenodd"
                  d="M12.003 9.68A2.326 2.326 0 009.676 12a2.331 2.331 0 002.327 2.33A2.33 2.33 0 0014.329 12a2.326 2.326 0 00-2.326-2.32z"
                  fill="#B2B9CC"
                  fillRule="evenodd"
                />
              </svg>
            </button>
          </div>
          {/* button submit */}
          <div className="flex flex-col gap-4">
            <button
              className={`w-full h-12 max-w-lg flex btn-glow items-center justify-center gap-2 btn-primary ${
                loding ? "opacity-65 cursor-not-allowed" : ""
              }`}
              type="submit"
              disabled={loding}
            >
              {loding ? <Spinner className="h-full" /> : <span>تأكيد</span>}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Register;
