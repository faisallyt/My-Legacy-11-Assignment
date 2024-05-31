import React, { useEffect, useState } from "react";
import Product from "../components/Product";

const BookMarks = () => {
  const [singleProduct, setSingleProduct] = useState({});
  useEffect(() => {
    const myObjectString = localStorage.getItem("bookMarked");

    const myObject = JSON.parse(myObjectString);
    setSingleProduct(myObject);
    console.log(singleProduct);
  }, []);
  return (
    <div className=" flex flex-row flex-wrap gap-2">
      <Product product={singleProduct} />
    </div>
  );
};

export default BookMarks;
