import React from "react";

const Product = ({ product }) => {
  const originalPrice = Math.round(
    product.price / (1 - product.discountPercentage / 100)
  );

  function setlocalStorage() {
    const myObjectString = JSON.stringify(product);

    localStorage.setItem(myObjectString);
  }
  return (
    <section className="  border rounded-[20px] p-4">
      <span
        className="fa fa-star checked absolute "
        onClick={setlocalStorage}></span>
      <img src={product.thumbnail} alt="" />
      <div>
        <h2>{product.title}</h2>
        {/* <h3>{product.description}</h3> */}
        <h2>{product.brand}</h2>
        <div className="flex items-center gap-3">
          <div className="flex  items-center gap-1">
            <h4>Ratings : {product.rating}</h4>
            <span className="fa fa-star checked"></span>
          </div>
          <h4>({product.reviews.length})</h4>
        </div>
        <div className="flex items-center justify-around">
          <h2>₹ {product.price}</h2>
          <h2>
            ₹<span className=" line-through">{originalPrice}</span>
          </h2>
          <h2>{product.discountPercentage} % off</h2>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Product;
