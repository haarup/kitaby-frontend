import Sidbar from "./components/sidbar";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";
const Dashboard = () => {
  return (
    <div dir="rtl" className="h-[100dvh] flex flex-wrap">
      <Sidbar />
      <div className="flex-1 h-full overflow-y-auto">
        <Outlet />
      </div>
      <Toaster
        richColors
        className="right-2 left-2"
        // style={{ marginRight: "280px" }}
        toastOptions={{
          style: {
            background: "#fff",
            border: "1px solid hsl(0, 0%, 90%)",
            padding: "15px",
            textAlign: "right",
          },
          className: "my-toast",
        }}
      />
    </div>
  );
};

export default Dashboard;
