import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadProductImages } from "../../../lib/redux/slices/imagesSlice";
import ActionButton from "./actionButton";

const FileInputProduct = ({ multiple = false }) => {
  const fileInputRef = React.createRef();
  const dispatch = useDispatch();
  const productId = useSelector((state) => state.products.id);
  const loading = useSelector((state) => state.images.loading);

  const [isProductIdAvailable, setIsProductIdAvailable] = useState(false);

  useEffect(() => {
    if (productId) {
      setIsProductIdAvailable(true);
    }
  }, [productId]);

  const handleImageSelect = async (e) => {
    const files = Array.from(e.target.files);

    if (isProductIdAvailable) {
      await dispatch(uploadProductImages({ images: files }));
    } else {
    }

    e.target.value = null; 
  };

  const handleButtonClick = () => {
    fileInputRef.current.click(); 
  };

  return (
    <div className="file-input">
      <input
        type="file"
        name="images"
        className="file-btn"
        id="files"
        ref={fileInputRef}
        multiple={multiple}
        onChange={handleImageSelect}
        style={{ display: "none" }}
      />
      <ActionButton
        className="file-btn"
        onClick={handleButtonClick}
        text="صورة المنتج"
        loading={loading}
      />
    </div>
  );
};

export default FileInputProduct;
