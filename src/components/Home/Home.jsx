import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Header from "../Shared/Header";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Link to={"/add-product"} className="btn, btn-error">
        Add Product
      </Link>
    </div>
  );
};

Home.propTypes = {};

export default Home;
