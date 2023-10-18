import React from "react";
import PropTypes from "prop-types";
import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner";

const Home = () => {
  const loadedBrands = useLoaderData();
  console.log(loadedBrands);
  return (
    <div>
      <Banner loadedBrands={loadedBrands}></Banner>
      <div className="lg:container grid md:grid-cols-3 mx-auto gap-10 my-16">
        {loadedBrands?.map((brand) => (
          <div
            key={brand._id}
            className="card bg-base-100 shadow-xl image-full"
          >
            <figure>
              <img className="w-full h-52" src={brand.logo} alt=" " />
            </figure>
            <div className="card-body">
              <h2 className="card-title  ">{brand.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
