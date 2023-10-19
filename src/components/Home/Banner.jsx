import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";

// import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Banner = ({ loadedBrands }) => {
  console.log(loadedBrands);

  return (
    <div
      style={{
        backgroundImage:
          "url(https://i.ibb.co/wyn847T/Products-Group-Image-Banner.jpg)",
      }}
      className="bg-cover bg-center bg-no-repeat h-screen bg-blend-overlay bg-[#3f3d3d] flex flex-col items-center justify-center "
    >
      <h1 className="text-5xl text-center p-5 -mt-32 font-bold text-white bg-white bg-opacity-10 rounded-2xl shadow-5xl  border border-r-black  border-opacity-30 backdrop-filter backdrop-blur-sm animate-pulse ">
        Pioneering Digital Possibilities, <br /> One Byte at a Time.
      </h1>
    </div>
  );
};

Banner.propTypes = {
  loadedBrands: PropTypes.array,
};

export default Banner;
