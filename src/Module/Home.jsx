import React, { useEffect, useRef } from "react";
import Carousel from "../Components/Carousel";
import "./style/style.css";
import Hero from "../Components/Hero";
import Feature from "../Components/Feature";
import WeatherComponent from "../Components/Weather";
import Time from "../Components/Time";

function Home() {
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show-css");
        } else {
          entry.target.classList.remove("show-css");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden-css");
    hiddenElements.forEach((el) => observer.current.observe(el));

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  return (
    <div className=" items-center">
      <div className=" blur-bg1">
        <div className="hidden-css">
          <br />
          <br />
          <br />
          <br />
          <Carousel />
          <br />
        </div>
      </div>
      <div className="justify-center blur-bg2 ">
        <div className="hidden-css">
          <br />
          <WeatherComponent />
          <Time />
          <Hero />
        </div>
      </div>
      <div className="  blur-bg3">
        <br />
        <br />
        <Feature />
        <br />
      </div>
    </div>
  );
}

export default Home;
