import { Navigate } from "react-router-dom";

const GuestRoute = ({ children }) => {
  const token = localStorage.getItem("authToken");

  if (token) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default GuestRoute;
