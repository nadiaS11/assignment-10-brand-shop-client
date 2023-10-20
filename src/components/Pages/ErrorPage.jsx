import React from "react";
import PropTypes from "prop-types";
import { Link, useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = (props) => {
  const error = useRouteError();
  error.message = "Go back to home";
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <p className=" text-center mt-52 font-semibold text-xl">
        {error.statusText || error.message}
      </p>

      {error.status === 404 && (
        <div className="text-center">
          <p>Looks like, you are lost.</p>
          <button onClick={handleGoBack} className="btn btn-ghost">
            Go back
          </button>
        </div>
      )}

      <h4 className=" text-center mt-5 font-black text-xl">
        <Link className="bg-gray-300 btn" to="/">
          Home
        </Link>
      </h4>
    </div>
  );
};

ErrorPage.propTypes = {};

export default ErrorPage;
