import { useState } from "react";

const Register = () => {
  const [step, setStep] = useState(1); // لتتبع الخطوة الحالية
  const [storeInfo, setStoreInfo] = useState({
    ownerName: "",
    phoneNumber: "",
    otp: "",
    domain: "",
    storeName: "",
  });

  const [errors, setErrors] = useState({
    ownerName: "",
    phoneNumber: "",
    otp: "",
    domain: "",
    storeName: "",
  });

  // دالة لمعالجة تغيير البيانات المدخلة
  const handleChange = (e) => {
    setStoreInfo({
      ...storeInfo,
      [e.target.name]: e.target.value,
    });
  };

  // دالة للتحقق من صحة البيانات في الخطوة الأولى
  const validateStep1 = () => {
    const newErrors = {};
    if (!storeInfo.ownerName) {
      newErrors.ownerName = "اسم صاحب المتجر مطلوب";
    }
    if (!storeInfo.phoneNumber) {
      newErrors.phoneNumber = "رقم الهاتف مطلوب";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // إذا كانت الأخطاء فارغة نعيد القيمة true
  };

  // دالة للتحقق من صحة البيانات في الخطوة الثانية (OTP)
  const validateStep2 = () => {
    const newErrors = {};
    if (!storeInfo.otp) {
      newErrors.otp = "كود التحقق مطلوب";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // دالة للتحقق من صحة البيانات في الخطوة الثالثة (معلومات المتجر)
  const validateStep3 = () => {
    const newErrors = {};
    if (!storeInfo.domain) {
      newErrors.domain = "الدومين الفرعي مطلوب";
    }
    if (!storeInfo.storeName) {
      newErrors.storeName = "اسم المتجر مطلوب";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // دالة للانتقال إلى الخطوة التالية
  const nextStep = () => {
    if (step === 1 && validateStep1()) {
      setStep(step + 1);
    } else if (step === 2 && validateStep2()) {
      setStep(step + 1);
    } else if (step === 3 && validateStep3()) {
      // عند إتمام جميع الخطوات
      alert("تم التسجيل بنجاح!");
    }
  };

  // دالة للعودة للخطوة السابقة
  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="bg-[#F5F5F5] h-[100svh] w-full py-6 px-4">
      <h1 className="font-bold text-2xl mx-auto max-w-2xl text-center">
        انت على بعد خطوات على انشاء متجرك الالكتروني الخاص بك
      </h1>

      <section className="w-full md:w-2/4 flex flex-col gap-8">
        <div className="inline-flex p-1 self-start rounded-full text-center border border-base-content/10">
          <button className="px-6 py-3 text-xs font-medium rounded-full text-blue-500 bg-blue-500/10">
            انشاء حساب جديد
          </button>
          <button className="px-6 py-3 text-xs font-medium rounded-full">
            تسجيل الدخول
          </button>
        </div>
        <h1 className="text-4xl font-semibold">
          إنشاء حساب لاستمتاع بتجربة تسوق فريدة
        </h1>
        <p className="opacity-60">
          استمتع بتجربة تسوق فريدة! انضم إلى مجتمعنا واحصل على فرص لا تُنسى.
        </p>
        <form className="flex flex-col gap-4 max-w-[28rem] translate-y-[-1rem]">
          <div className="input input-bordered flex items-center gap-4 w-full h-auto py-3 px-5 rounded-3xl">
            <svg
              fill="none"
              height={24}
              viewBox="0 0 24 24"
              width={24}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.582 8.938a5.543 5.543 0 10-11.087 0 5.543 5.543 0 0011.087 0z"
                fill="#58B3F4"
              />
              <path
                d="M9.58 14.813h5.05A5.187 5.187 0 0119.819 20c0 .102 0 .206.002.308.016 1.15-.918 1.985-2.067 1.985h-.233a.3.3 0 01-.3-.3v-2.456a.747.747 0 10-1.496 0v2.456a.3.3 0 01-.3.3H8.792a.3.3 0 01-.3-.3v-2.456a.75.75 0 00-1.5 0v2.456a.3.3 0 01-.3.3h-.234c-1.15 0-2.082-.835-2.067-1.985.002-.102.003-.206.003-.308a5.187 5.187 0 015.187-5.188z"
                fill="#58B3F4"
                opacity="0.4"
              />
            </svg>
            <label className="flex flex-col gap-1 w-full " htmlFor="name">
              <p className="text-xs font-light">الاسم الكامل</p>
              <input
                autoComplete="off"
                id="name"
                className="grow text-md w-4/5"
                placeholder="الرجاء قم بكتابة الاسم الكامل"
                type="text"
                name="name"
              />
            </label>
          </div>
          <div className="input input-bordered flex items-center gap-4 w-full h-auto py-3 px-5 rounded-3xl">
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
            <label className="flex flex-col gap-1 w-full " htmlFor="phone">
              <p className="text-xs font-light">رقم الهاتف</p>
              <input
                autoComplete="off"
                id="phone"
                className="grow text-md w-4/5"
                placeholder="يجب ان يبدأ ب '07'"
                type="number"
                defaultValue
                name="phone"
              />
            </label>
          </div>
          <div className="input input-bordered flex items-center gap-4 w-full h-auto py-3 px-5 rounded-3xl">
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
            <label className="flex flex-col gap-1 w-full " htmlFor="password">
              <p className="text-xs font-light">كلمة المرور</p>
              <input
                autoComplete="off"
                id="password"
                className="grow text-md w-4/5"
                placeholder="احرف كبيرة وصغيرة، اشكال خاصة، ارقام"
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
          <div className="flex px-5 gap-2 translate-y-[-0.5rem] overflow-hidden transition-all duration-700 w-0">
            <div className="rounded-full transition-all duration-300" />
          </div>
          <div className="flex flex-col gap-4">
            <button
              className="flex btn-glow w-full items-center justify-center gap-2 btn-primary max-w-[28rem]"
              type="submit"
            >
              تأكيد
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Register;
