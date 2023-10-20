import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "../Shared/ProductCard";
import Swal from "sweetalert2";
import { AuthContext } from "../Authentications/AuthProvider";

const MyCart = () => {
  const cartItems = useLoaderData();
  const { user } = useContext(AuthContext);
  const [cart, setCart] = useState([...cartItems]);
  console.log(cart);

  useEffect(() => {
    const filterCart = cartItems?.filter((item) => item.email === user?.email);
    console.log(filterCart);
    setCart(filterCart);
  }, [cartItems, user]);

  const handleDelete = (id) => {
    console.log(id, "to delete");

    Swal.fire({
      title: "Are you sure?",
      text: "The product will be removed from your cart.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://brand-shop-server-ten.vercel.app/cart/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            const remaining = cart.filter((item) => item._id !== id);
            setCart(remaining);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "The product is removed.", "success");
            }
          });
      }
    });
  };

  return (
    <div>
      <h1 className="pt-16 text-3xl font-medium text-center">Your Cart</h1>

      {cart?.length > 0 ? (
        <div className="grid lg:grid-cols-2 gap-10 px-5 mx-auto py-10">
          {cart.map((item) => (
            <div key={item._id} className="relative">
              <button
                onClick={() => handleDelete(item._id)}
                className="btn btn-circle btn-error absolute z-20 text-xl -right-3 -top-2"
              >
                X
              </button>
              <ProductCard product={item.product}></ProductCard>
            </div>
          ))}
        </div>
      ) : (
        <h2 className="pt-16 text-xl mx-auto text-center">
          You have not added any products
        </h2>
      )}
    </div>
  );
};

MyCart.propTypes = {};

export default MyCart;
