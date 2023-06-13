import React from "react";
import { Link } from "react-router-dom";
import img1 from "../img/1.png";
import Top from "../Components/Top";
import "./style/Product.css";
import Kurs from "../Components/Kurs";

function Product() {
  return (
    <div>
      <div className="relative w-full h-0 pb-[177.77%] sm:h-auto  sm:aspect-w-16 sm:aspect-h-9">
        <img
          className="absolute inset-0 w-full h-full object-cover object-center"
          src={img1}
          alt="img1"
        />
      </div>
      <Kurs />
      <h1 className="text-center font-[500] text-4xl mt-8">Top Product</h1>
      <Top />
      <h1 className="text-center font-[800] text-4xl mt-8">Category</h1>
      <div className="category text-center font-[500] text-xl mt-8">
        <div>
          <ul className="flex flex-wrap justify-center">
            <li className="m-8 nav-product">
              <Link to="/product">Bed</Link>
            </li>
            <li className="m-8 nav-product">
              <Link to="/product/lamp">Lamp</Link>
            </li>
            <li className="m-8 nav-product">
              <Link to="/product/chair">Chair</Link>
            </li>
            <li className="m-8 nav-product">
              <Link to="/product/table">Table</Link>
            </li>
            <li className="m-8 nav-product">
              <Link to="/product/mirror">Mirror</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Product;
