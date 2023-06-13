import React from "react";
import HeroBG from "./src/HeroBG.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Hero() {
  const Navigate = useNavigate();
  function handleSubmit(event) {
    Navigate("/product");
    event.preventDefault();
  }
  return (
    <>
      <section>
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 ">
          <div className="mr-auto place-self-center lg:col-span-7 p-8">
            <h1 className="text-gray-800 max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6x">
              The best ways to choose{" "}
              <span className="text-[#A9907E]">Furniture </span> for your lovely
              home
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-800 lg:mb-8 md:text-lg lg:text-xl">
              The biggest furniture shops for decorate your house in every room
              you have!{" "}
            </p>
            <Link
              to="/product"
              onClick={handleSubmit}
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 hover:text-white border bg-[#A9907E] rounded-lg hover:bg-[#675D50]"
            >
              Shop Now!
            </Link>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={HeroBG} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
