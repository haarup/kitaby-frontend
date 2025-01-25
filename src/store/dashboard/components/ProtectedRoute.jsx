import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("authToken");

  if (!token) {
    // إعادة التوجيه إلى صفحة تسجيل الدخول إذا لم يكن التوكن موجودًا
    return <Navigate to="/login" replace />;
  }

  // عرض المكونات المحمية إذا كان التوكن موجودًا
  return children;
};

export default ProtectedRoute;
