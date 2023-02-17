import React from "react";
import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";
export const ProductList = () => {
  return (
    <div className="pl" id="product">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire.</h1>
        <p className="pl-desc">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit and
          fugit.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};
