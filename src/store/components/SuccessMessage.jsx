const SuccessMessage = ({ orderNumber, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 sm:w-1/2 md:w-1/3 text-center">
        <h2 className="text-xl font-semibold text-green-500">تم إنشاء الطلب بنجاح!</h2>
        <p className="mt-4 text-gray-700">
          تم إرسال طلبك إلى المتجر ونحن الآن بصدد معالجته. سيتم إرسال رسالة عبر WhatsApp
          عند قبول الطلب وشحنه. يمكنك تتبع حالة طلبك من خلال قسم <strong>طلباتي</strong> في ملفك الشخصي.
        </p>
        <p className="mt-2 text-sm text-gray-500">
          رقم الطلب: <strong>{orderNumber}</strong>
        </p>
        <button
          className="mt-6 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          onClick={onClose}
        >
          إغلاق
        </button>
      </div>
    </div>
  );
};

export default SuccessMessage;
