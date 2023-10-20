import { useContext } from "react";
import PropTypes from "prop-types";
import { Spinner } from "@material-tailwind/react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Authentications/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();
  console.log(location);

  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
