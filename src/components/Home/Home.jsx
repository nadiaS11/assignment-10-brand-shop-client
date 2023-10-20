import React from "react";
import PropTypes from "prop-types";
import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Footer from "./Footer";

const Home = () => {
  const loadedBrands = useLoaderData();
  console.log(loadedBrands);
  return (
    <div>
      <Banner loadedBrands={loadedBrands}></Banner>
      <div className="lg:container grid md:grid-cols-2 lg:grid-cols-3 mx-auto gap-10 my-16">
        {loadedBrands?.map((brand) => (
          <Link
            to={`/brands/${brand.name}`}
            key={brand._id}
            className="card bg-base-100 shadow-xl image-full"
          >
            <figure className="h-56">
              <img className="w-full" src={brand.logo} alt=" " />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl font-semibold ">
                {brand.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>

      <Footer></Footer>
    </div>
  );
};

Home.propTypes = {};

export default Home;
