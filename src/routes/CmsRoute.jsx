import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import App from "../App";

import Register from "../auth/Register";

import Home from "../store/dashboard/page/Home";
import Dashboard from "../store/dashboard/Dashboard";
import ProductsManagement from "../store/dashboard/page/products/ProductsManagement";
import CategoryMangement from "../store/dashboard/page/category/CategoryMangement";

import Store from "../store/ui/Store";
import Cart from "../store/components/Cart/Cart";
import Checkout from "../store/components/Checkout/Checkout";

import ProtectedRoute from "../store/dashboard/components/ProtectedRoute";
import GuestRoute from "../auth/components/GuestRoute";
import Test from "../test/test";

const CmsRoute = () => {
  const subdomain = window.location.hostname.split(".")[0];

  const renderRoutes = () => {
    switch (subdomain) {
      case "store":
        return (
          <>
            <Route
              path="/login"
              element={
                <GuestRoute>
                  <Register />
                </GuestRoute>
              }
            />
            <Route
              path="/register"
              element={
                <GuestRoute>
                  <Register />
                </GuestRoute>
              }
            />

            <Route
              path="/*"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            >
              <Route index element={<Home />} />

              <Route path="products/*">
                <Route index element={<Navigate to="management" replace />} />
                <Route path="management" element={<ProductsManagement />} />
              </Route>

              <Route path="cats/*">
                <Route index element={<Navigate to="management" replace />} />
                <Route path="management" element={<CategoryMangement />} />
              </Route>
            </Route>

            <Route path="*" element={<Navigate to="/" />} />
          </>
        );
      case "admin":
        return (
          <>
            {/* <Route path="/" element={<SubStore2 />} />
            <Route path="*" element={<Navigate to="/" />} /> */}
          </>
        );
      default:
        return (
          <Route>
            <Route path="/" element={<Store />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>
        );
    }
  };

  return (
    <Router>
      <Routes>
        {subdomain && renderRoutes()}
        <Route path="/*" element={<App />} />
        <Route path="/Test" element={<Test />} />
        {/* <Route path="/dashboard" element={<Test />} /> */}
      </Routes>
    </Router>
  );
};

export default CmsRoute;
