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
      <div className="grid lg:grid-cols-2 gap-10 px-5">
        {brandProducts.length > 0 ? (
          brandProducts?.map((product) => (
            <div key={product._id}>
              <div className="m-4 mx-auto max-w-screen-lg rounded-md border border-gray-100 text-gray-600 shadow-xl  ">
                <div className="relative flex h-full flex-col text-gray-600 md:flex-row">
                  <div className="relative p-8 md:w-4/6">
                    <div className="flex flex-col md:flex-row">
                      <h2 className="mb-2 text-2xl font-black">
                        {product.name}
                      </h2>
                      <span className="ml-2 text-xs uppercase font-bold">
                        {product.brand}
                      </span>
                    </div>
                    <p className="mt-3 font-sans text-base tracking-normal">
                      {product.type}
                    </p>
                    <div className="flex flex-col md:flex-row md:items-end">
                      <p className="mt-6 text-4xl font-black">
                        ${product.price}
                        <sup className="align-super text-sm">00</sup>
                      </p>
                      <span className="ml-2 text-xs uppercase">
                        {product.rating}
                      </span>
                    </div>
                    <div className="mt-8 flex flex-col sm:flex-row">
                      <button className="mr-2 mb-4 flex cursor-pointer items-center justify-center rounded-md bg-gray-800 py-2 px-8 text-center text-white transition duration-150 ease-in-out hover:translate-y-1 hover:bg-gray-500">
                        {/* <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-2 h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg> */}
                        Update
                      </button>
                      <button className="mr-2 mb-4 flex cursor-pointer items-center font-semibold justify-center rounded-md border py-2 px-8 text-center text-gray-500 transition duration-150 ease-in-out hover:translate-y-1 hover:bg-rose-500 hover:text-white">
                        Details
                      </button>
                    </div>
                  </div>
                  <div className="mx-auto flex items-center px-5 pt-1 md:p-8">
                    <img
                      className="block h-[30vh]  w-full rounded-md shadow-lg"
                      src={product.image}
                      alt="Shop image"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center font-bold text-4xl max-w-2xl mx-auto leading-snug">
            Opps! <br /> Looks like we are out of supplies right now. Plase
            check back soon.
          </p>
        )}
      </div>
    </div>
  );
};

BrandProducts.propTypes = {};

export default BrandProducts;
