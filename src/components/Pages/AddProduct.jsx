import React from "react";
import PropTypes from "prop-types";

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

    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("product added successfully");
        }
      });
  };
  return (
    <div>
      add product here
      <div>
        <form onSubmit={handleAddProduct}>
          <div
            className="flex gap-10  
       items-center"
          >
            <div className="form-control w-1/2  ">
              <label className="label">
                <span className="label-text font-bold">Product Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Product Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control w-1/2  ">
              <label className="label">
                <span className="label-text font-bold">price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="price"
                  placeholder="price"
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
              <label className="input-group">
                <input
                  type="text"
                  placeholder="brand"
                  name="brand"
                  className="input input-bordered w-full "
                />
              </label>
            </div>
            <div className="form-control w-1/2 ">
              <label className="label">
                <span className="label-text font-bold"> Rating</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
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
              <label className="input-group">
                <input
                  type="text"
                  name="type"
                  placeholder="type"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control w-1/2 ">
              <label className="label">
                <span className="label-text font-bold">Description</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="description"
                  placeholder="Name"
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
                  placeholder="image"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <button
              type="submit"
              className="w-full mt-5 rounded-sm bg-[#D2B48C] py-1 font-semibold  text-xl"
            >
              Add new product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

AddProduct.propTypes = {};

export default AddProduct;
