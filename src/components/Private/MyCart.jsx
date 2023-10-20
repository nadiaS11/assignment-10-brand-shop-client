import React from "react";
import PropTypes from "prop-types";
import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "../Shared/ProductCard";

const MyCart = () => {
  const cartItems = useLoaderData();

  const { email } = useParams();

  console.log(email, cartItems);

  return (
    <div>
      <h1 className="pt-16 text-3xl font-medium text-center">
        Your added products
      </h1>
      <div className="grid lg:grid-cols-2 gap-10 px-5 mx-auto py-10">
        {cartItems?.map((item) => (
          <div key={item._id}>
            <ProductCard product={item.product}></ProductCard>
          </div>
        ))}
      </div>
    </div>
  );
};

MyCart.propTypes = {};

export default MyCart;
