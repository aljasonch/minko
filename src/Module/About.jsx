import Faq from "../Components/FAQ";
import React, { useEffect, useRef } from "react";
import Team from "../Components/Team";
import './style/style.css'
function About() {
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
        <div className="blur-bg2">
            <div className="hidden-css">
                
            <Team />
            <br />
            <br />
            <br />
            <br />
            <br />
                
</div> 
            <Faq />
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}
export default About;