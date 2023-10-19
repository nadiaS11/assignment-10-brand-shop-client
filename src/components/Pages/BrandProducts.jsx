import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProductCard from "../Shared/ProductCard";

const BrandProducts = () => {
  const { name } = useParams();
  const products = useLoaderData();

  const [brandProducts, setBrandProducts] = useState([]);

  const [ads, setAds] = useState({});
  useEffect(() => {
    const all = products?.filter((product) => product.brand == name);
    console.log(all);
    setBrandProducts(all);
    fetch("https://brand-shop-server-ten.vercel.app/brands")
      .then((response) => response.json())
      .then((data) => {
        const [eachBrand] = data.filter((brand) => brand.name == name);
        console.log(eachBrand);
        setAds(eachBrand);
      });
  }, [name, products]);

  console.log(name, products);
  return (
    <div>
      <div className="max-w-6xl mx-auto py-10">
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
      <div className="grid lg:grid-cols-2 gap-10 px-5 mx-auto py-10">
        {brandProducts.length > 0 ? (
          brandProducts?.map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))
        ) : (
          <p className="text-center font-bold text-4xl max-w-2xl mx-auto leading-snug col-span-3">
            Opps! <br /> Looks Like We're Out Of Stock Right Now. Please Check
            back Soon.
          </p>
        )}
      </div>
    </div>
  );
};

BrandProducts.propTypes = {};

export default BrandProducts;
