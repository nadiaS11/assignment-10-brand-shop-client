import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Footer from "./Footer";
import Newsletter from "./Newsletter";
import FeaturedCard from "./FeaturedCard";
import Marquee from "react-fast-marquee";

const Home = () => {
  const loadedBrands = useLoaderData();
  // console.log(loadedBrands);

  const [products, setProducts] = useState();

  useEffect(() => {
    fetch("https://brand-shop-server-ten.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  return (
    <div>
      <Banner></Banner>

      {/* brands products */}
      <div className="lg:container grid md:grid-cols-2 lg:grid-cols-3 mx-auto gap-10 my-24 px-2 ">
        {loadedBrands?.map((brand) => (
          <Link
            to={`/brands/${brand.name}`}
            key={brand._id}
            className="card bg-base-100 w-full mx-auto shadow-xl image-full"
          >
            <figure className="h-56 w-full ">
              <img className="w-full  mx-auto" src={brand.logo} alt=" " />
            </figure>
            <div className="card-body ">
              <h2 className="card-title text-2xl font-semibold ">
                {brand.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>

      <div
        style={{
          backgroundImage:
            "url(https://i.ibb.co/SBxZq93/photo-1517874045092-09f497a82704-auto-format-fit-crop-q-80-w-2070-ixlib-rb-4-0.jpg)",
        }}
        className="bg-cover bg-center bg-no-repeat py-10 bg-blend-overlay bg-[#272525]  mx-auto  px-4"
      >
        <h1 className=" text-5xl text-center text-gray-400 font-bold mb-20">
          Featured Deals
        </h1>
        <div className="mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products?.slice(3, 9).map((product) => (
            <FeaturedCard key={product._id} product={product}></FeaturedCard>
          ))}
        </div>
      </div>

      <Newsletter></Newsletter>

      <Footer></Footer>
    </div>
  );
};

Home.propTypes = {};

export default Home;
