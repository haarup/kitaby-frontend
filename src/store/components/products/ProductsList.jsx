import axiosInstance from "../../../lib/axios/axiosInstance";
import BottomSheet from "../BottomSheet";
import { useEffect, useState } from "react";
import Card from "../card/Card";
import CardLoading from "../card/CardLoading";
import { useSelector } from "react-redux";
import Spinner from "../../../components/Spinner/Spinner";

const ProductsList = () => {
  const domain = window.location.hostname.split(".")[0];
  const categoryId = useSelector((state) => state.categoryID.categoryId);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({});
  const [hasMore, setHasMore] = useState(true);

  const [page, setPage] = useState(1);
  const limit = 12;

  const [isSheetOpen, setSheetOpen] = useState(false);
  const [product, setProduct] = useState(null);

  const fetchProducts = async (currentPage = 1) => {
    if (loading) return;

    setLoading(true);
    setError(null);

    try {
      const url = categoryId
        ? `/products?category_id=${categoryId}&page=${currentPage}&limit=${limit}`
        : `/products?page=${currentPage}&limit=${limit}`;

      const response = await axiosInstance(url, {
        method: "GET",
        headers: {
          "X-Domain": domain,
        },
      });

      const data = response.data;

      setProducts((prevProducts) => {
        const newProducts = data.products.data.filter(
          (product) => !prevProducts.some((p) => p.id === product.id)
        );
        return [...prevProducts, ...newProducts];
      });

      setPagination({
        currentPage: data.products.current_page,
        totalPages: data.products.last_page,
        totalItems: data.products.total,
      });
      setHasMore(data.products.current_page < data.products.last_page);
    } catch (error) {
      setError(error.message || "حدث خطأ أثناء جلب البيانات.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (loading || !hasMore) return; // منع التكرار أثناء التحميل أو عند عدم وجود المزيد
    fetchProducts(page);
  }, [page, categoryId]); // قم بإضافة محددات التغيير

  useEffect(() => {
    const handleScroll = () => {
      if (
        hasMore &&
        !loading &&
        window.innerHeight + document.documentElement.scrollTop + 1 >=
          document.documentElement.scrollHeight
      ) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasMore, loading]);
  // أضف hasMore و loading كمحددات

  const handleClick = (data) => {
    setProduct(data);
    setSheetOpen(true);
  };

  if (error) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <span>
          <p>Error</p>
          <p>{error}</p>
        </span>
      </div>
    );
  }

  return (
    <div className="relative">
      <div
        id="products-list"
        className="max-w-6xl mx-auto p-4 grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-x-[20px] gap-y-[30px] overflow-y-auto"
      >
        {loading && products.length === 0 ? (
          Array.from({ length: 10 }).map((_, index) => (
            <CardLoading key={index} />
          ))
        ) : products.length > 0 ? (
          products.map((product) => (
            <Card
              key={product.id}
              onClick={() => handleClick(product)}
              product={product}
            />
          ))
        ) : (
          <p>No products available</p>
        )}

        <BottomSheet
          isOpen={isSheetOpen}
          data={product}
          onClose={() => setSheetOpen(false)}
        />
      </div>

      {loading && hasMore && (
        <div className="w-full flex gap-2 justify-center items-center text-center py-4">
          <span className="h-6 w-6">
            <Spinner />
          </span>
          <p>loading...</p>
        </div>
      )}

      {!hasMore && (
        <div className="text-center py-4">
          <p className="text-gray-600">تم عرض جميع المنتجات</p>
        </div>
      )}
    </div>
  );
};

export default ProductsList;
