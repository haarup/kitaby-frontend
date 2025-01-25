
import Navbar from "../components/nav/Navbar";
import ProductsList from "../components/products/ProductsList";
import { Toaster } from "sonner";
const Store = () => {

  return (
    <>
      <Navbar />
      <ProductsList />
      <Toaster
        richColors
        className="right-2"
        toastOptions={{
          style: {
            background: "#fff",
            border: "1px solid hsl(0, 0%, 90%)",
            padding: "15px",
            textAlign: "right",
          },
          className: "my-toast w-full",
        }}
      />
      {/* <Footer /> */}
    </>
  );
}

export default Store;
