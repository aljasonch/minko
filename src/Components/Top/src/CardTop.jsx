import React, { useState } from "react";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { storeCardData } from '../../../actions/cardActions';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CardTop({ gambar, name, harga, rate }) {
  const dispatch = useDispatch();
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleClick = () => {
    const cardData = {
      gambar,
      name,
      harga,
      rate
    };
    dispatch(storeCardData(cardData));
    toast.success("Item added to cart!"); 
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="halaman1 mx-2 my-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
      <div className="product text-center subpixel-antialiased bg-white p-4 rounded-lg drop-shadow-xl" style={{ height: imageLoaded ? "auto" : "225px" }}>
        <div
          className={`skeleton-loading ${imageLoaded ? 'loaded' : ''}`}
          style={{ backgroundImage: `url(${gambar})` }}
        ></div>
        <LazyLoadImage
          src={gambar}
          alt="barang"
          effect="blur"
          className={`img-fluid mb-3 ${imageLoaded ? 'loaded' : ''}`}
          onLoad={handleImageLoad}
        />
        <div className="flex justify-between items-start">
          <h2 className="font-[500] my-1 text-sm">{name}</h2>
        </div>
        <h4 className="text-sm mb-2 flex justify-between items-start">Price $ {harga}</h4>
        <div className="flex justify-between items-start">
          <div className="flex items-start mt-2">
            <FontAwesomeIcon icon={faStar} style={{ color: "#ffef3d" }} />
            <p className="font-semibold text-base text-zinc-400 ml-1">{rate}</p>
          </div>
          <button className="hover:scale-110" onClick={handleClick}>
            <FontAwesomeIcon icon={faCirclePlus} size="2x" className="button-icon" />
          </button>
        </div>
      </div>
      <style>
        {`
          .button-icon {
            color: #2a511f;
          }
          .button-icon:hover {
            color: blue; 
          }
          .skeleton-loading {
            background-color: #f2f2f2;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            position: relative;
          }
          .skeleton-loading.loaded {
            opacity: 0;
            transition: opacity 0.3s ease-in;
          }
          .img-fluid {
            display: block;
          }
          .img-fluid.loaded {
            opacity: 0;
            transition: opacity 0.3s ease-in;
          }
        `}
      </style>
    </div>
  );
}

export default CardTop;
