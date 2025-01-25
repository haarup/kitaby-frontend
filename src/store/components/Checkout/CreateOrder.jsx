import { useState } from "react";
import {
  Map2Icon,
  MapIcon,
  PhoneIcon,
  UserIcon,
} from "../../../assets/SVG/CustomIcons";
import axiosInstance from "../../../lib/axios/axiosInstance";
import { useSelector } from "react-redux";
import QRCode from "react-qr-code";

const CreateOrder = () => {
  const domain = window.location.hostname.split(".")[0];
  const cart = useSelector((state) => state.cart.cart);
  const [orderCreated, setOrderCreated] = useState(false);
  const [orderNumber, setOrderNumber] = useState(null);

  const deliveryPrice = 5000;
  const productTotal = cart.items.reduce(
    (total, item) =>
      total + item.qty * (item.price ? item.price : item.compare_price),
    0
  );

  const finalTotal = productTotal + deliveryPrice;

  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    street: "",
    total_price: finalTotal,
    products: cart.items,
  });

  const [errors, setErrors] = useState({
    name: null,
    phone: null,
    city: null,
    street: null,
    total_price: null,
    products: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    if (name === "phone") {
      if (!value.match(/^07\d{9}$/)) {
        setErrors((prev) => ({
          ...prev,
          phone: "رقم الهاتف يجب أن يبدأ بـ 07 ويحتوي على 11 رقمًا.",
        }));
      } else {
        setErrors((prev) => ({
          ...prev,
          phone: null,
        }));
      }
    }
  };

  const handleBlur = () => {
    let phone = form.phone;
    phone = phone.replace(/\s+/g, "").replace(/[^0-9]/g, "");
    if (!phone.match(/^0\d{9}$/)) {
      setErrors((prev) => ({
        ...prev,
        phone: "رقم الهاتف غير صالح. يجب أن يبدأ بـ 0 ويحتوي على 9 أرقام بعده.",
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        phone: null,
      }));
      setForm((prev) => ({ ...prev, phone }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post("/orders", form, {
        headers: {
          "X-Domain": domain,
        },
      });
      if (response.status === 200 || response.status === 201) {
        console.log("Order submitted successfully:", response.data);
        setOrderCreated(true);
        setOrderNumber(response.data.order.order_number);
      } else {
        console.error("Failed to submit order:", response.statusText);
        alert("حدث خطأ أثناء إرسال الطلب.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("حدث خطأ غير متوقع.");
    }
  };

  if (orderCreated) {
    return (
      <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 sm:w-1/1 md:w-1/2 text-center">
          <h2 className="text-xl font-semibold text-green-500">
            تم إنشاء الطلب بنجاح!
          </h2>
          <p className="mt-4 mb-4 text-gray-700">
            تم إرسال طلبك إلى المتجر ونحن الآن بصدد معالجته. سيتم إرسال رسالة
            عبر WhatsApp عند قبول الطلب وشحنه. يمكنك تتبع حالة طلبك من خلال قسم{" "}
            <strong>طلباتي</strong> في ملفك الشخصي.
          </p>

          <div className="w-full mx-auto">
            <QRCode
              className="mx-auto"
              value={`order_${orderNumber}`}
              size={120}
            />
            <p className="mt-2 text-sm text-gray-500">
              رقم الطلب: <strong>{orderNumber}</strong>
            </p>
          </div>
          <button
            className="mt-6 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            // onClick={onClose}
          >
            إغلاق
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-6 w-full" onSubmit={handleSubmit}>
      <label className="border flex items-center w-full h-auto py-3 px-5 rounded-3xl">
        <UserIcon />
        <input
          className="grow text-md w-full px-4"
          placeholder="الاسم الكامل"
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
      </label>
      <label
        className={`border ${
          errors.phone ? "border-red-500" : "border-gray-300"
        } flex items-center w-full h-auto py-3 px-5 rounded-3xl`}
      >
        <PhoneIcon />
        <input
          className={`grow text-md w-full px-4 `}
          placeholder="رقم هاتف المستلم"
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
      </label>
      {errors.phone && (
        <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
      )}
      <div className="flex-1" />
      <h2 className="text-lg mt-1 font-semibold">العنوان</h2>
      <div className="border select-bordered flex items-center gap-3 w-full h-auto pt-4 pb-2 px-5 rounded-3xl">
        <MapIcon />
        <div className="flex flex-col w-full">
          <p className="text-xs font-light translate-x-[-0.5rem]">المحافظة</p>
          <select
            name="city"
            value={form.city}
            onChange={handleChange}
            className="select w-full px-2 py-0 h-auto active:outline-none focus:outline-none active:border-none focus:border-none"
            required
          >
            <option disabled label="بغداد، البصرة، اربيل، ..." value="" />
            <option>البصرة</option>
            <option>بابل</option>
            <option>بغداد</option>
            <option>الأنبار</option>
            <option>السليمانية</option>
            <option>ميسان</option>
            <option>دهوك</option>
            <option>اربيل</option>
            <option>القادسية</option>
            <option>كركوك</option>
            <option>المثنى</option>
            <option>ديالى</option>
            <option>النجف</option>
            <option>نينوى</option>
            <option>واسط</option>
            <option>ذي قار</option>
            <option>صلاح الدين</option>
            <option>كربلاء</option>
          </select>
        </div>
      </div>
      <label className="border flex items-center w-full h-auto py-3 px-5 rounded-3xl">
        <Map2Icon />
        <input
          className="grow text-md w-full px-4"
          placeholder="الحي، الشارع، اقرب نقطة دالة"
          type="text"
          name="street"
          value={form.street}
          onChange={handleChange}
          required
        />
      </label>
      <button
        className="flex btn-glow btn-primary items-center justify-center gap-2 py-3 w-full rounded-full text-center bg-blue-500 text-white"
        type="submit"
      >
        تأكيد الطلب
      </button>
    </form>
  );
};

export default CreateOrder;
