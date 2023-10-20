import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" w-full p-4 bg-black border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2023{" "}
        <Link to={"/"} className="hover:underline">
          NadTech
        </Link>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <Link to="/" className="mr-4 hover:underline md:mr-6">
            Home
          </Link>
        </li>
        <li>
          <Link to="/add-product" className="mr-4 hover:underline md:mr-6">
            Add Product
          </Link>
        </li>
        <li>
          <Link to="/cart" className="mr-4 hover:underline md:mr-6">
            Cart
          </Link>
        </li>
        <li>
          <Link to="/brands/Apple" className="mr-4 hover:underline md:mr-6">
            Apple
          </Link>
        </li>
        <li>
          <Link to="/brands/Microsoft" className="mr-4 hover:underline md:mr-6">
            Microsoft
          </Link>
        </li>
        <li>
          <Link to="/brands/Google" className="mr-4 hover:underline md:mr-6">
            Google
          </Link>
        </li>
        <li>
          <Link to="/brands/Intel" className="mr-4 hover:underline md:mr-6">
            Intel
          </Link>
        </li>
        <li>
          <Link to="/brands/Samsung" className="mr-4 hover:underline md:mr-6">
            Samsung
          </Link>
        </li>
        <li>
          <Link to="/brands/Sony" className="mr-4 hover:underline md:mr-6">
            Sony
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
