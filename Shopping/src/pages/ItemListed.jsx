import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../components/Product";

const ItemListed = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => setData(response.data.products))
      .then(console.log(data))
      .catch((error) => {
        console.error("error fetching data :", error);
      });
  }, []);
  return (
    <div>
      <h1>Our Products</h1>
      <div className=" flex flex-row flex-wrap gap-2">
        {data.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ItemListed;
