import React from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();

    const form = e.target;
    const image = form.image.value;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const newProduct = {
      image,
      name,
      brand,
      type,
      price,
      rating,
      description,
    };
    console.log("product added", newProduct);

    fetch("https://brand-shop-server-ten.vercel.app/products", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast("Product added successfully");
        }
      });
  };
  return (
    <div className="  pt-20 space-y-10 bg-gray-200 min-h-screen">
      <h1 className="text-center font-bold text-2xl">Add New Product</h1>
      <form
        onSubmit={handleAddProduct}
        className="max-w-5xl container mx-auto px-5"
      >
        <div
          className="flex gap-10 
       items-center"
        >
          <div className="form-control w-1/2  ">
            <label className="label">
              <span className="label-text font-bold">Product Name</span>
            </label>
            <label className="    ">
              <input
                type="text"
                name="name"
                placeholder="Product name"
                className="input  input-bordered w-full  "
              />
            </label>
          </div>
          <div className="form-control w-1/2  ">
            <label className="label">
              <span className="label-text font-bold">Price</span>
            </label>
            <label className="   ">
              <input
                type="text"
                name="price"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div
          className="flex gap-10
       items-center"
        >
          <div className="form-control w-1/2   ">
            <label className="label">
              <span className="label-text font-bold">Brand</span>
            </label>
            <label className="   ">
              <input
                type="text"
                placeholder="Brand"
                name="brand"
                className="input input-bordered w-full "
              />
            </label>
          </div>
          <div className="form-control w-1/2 ">
            <label className="label">
              <span className="label-text font-bold"> Rating</span>
            </label>
            <label className="   ">
              <input
                type="text"
                name="rating"
                placeholder="Rating out of 5"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div
          className="flex gap-10
       items-center"
        >
          <div className="form-control w-1/2 ">
            <label className="label">
              <span className="label-text font-bold">Type</span>
            </label>
            <label className="   ">
              <input
                type="text"
                name="type"
                placeholder="Type"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-1/2 ">
            <label className="label">
              <span className="label-text font-bold">Description</span>
            </label>
            <label className="   ">
              <input
                type="text"
                name="description"
                placeholder="Description"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-bold">Image </span>
            </label>
            <label className="">
              <input
                type="url"
                name="image"
                placeholder="Product image"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <button
            type="submit"
            className="w-full mt-5 rounded-sm bg-black py-1 text-white font-semibold  text-xl"
          >
            Add new product
          </button>
        </div>
      </form>
    </div>
  );
};

AddProduct.propTypes = {};

export default AddProduct;
