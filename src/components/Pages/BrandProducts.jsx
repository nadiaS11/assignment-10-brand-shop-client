import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useLoaderData, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BrandProducts = () => {
  const { name } = useParams();

  const [ads, setAds] = useState({});
  useEffect(() => {
    fetch("https://brand-shop-server-ten.vercel.app/brands")
      .then((response) => response.json())
      .then((data) => {
        const [eachBrand] = data.filter((brand) => brand.name == name);
        console.log(eachBrand);
        setAds(eachBrand);
      });
  }, [name]);

  const products = useLoaderData();
  console.log(name, products);
  return (
    <div>
      <div className="max-w-6xl mx-auto pt-10">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Autoplay, Navigation, Pagination]}
          className="mySwiper"
        >
          {ads?.advertisements?.map((ad, idx) => (
            <SwiperSlide key={idx}>
              <img
                className="w-full h-[50vh] md:h-[65vh] mx-auto"
                src={ad}
                alt=""
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

BrandProducts.propTypes = {};

export default BrandProducts;
