import React from "react";
const Display = ({ gambar, judul, isi, href }) => {
  const scrollToTarget = () => {
    const targetElement = document.getElementById(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <button
      onClick={scrollToTarget}
      className="sm: w-64 mx-4 my-4 p-4 bg-white shadow-xl rounded-lg transition duration-300 ease-in-out transform hover:scale-110"
    >
      <img src={gambar} alt="/" className="w-full h-auto object-contain" />
      <div>
        <p className="text-base md:text-lg lg:text-xl font-bold mt-2 mb-1 md:mb-2">
          {judul}
        </p>
        <p className="text-xs md:text-sm lg:text-base">{isi}</p>
      </div>
    </button>
  );
};

export default Display;
