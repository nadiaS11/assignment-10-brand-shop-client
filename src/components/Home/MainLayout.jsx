import React from "react";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";

const MainLayout = (props) => {
  return (
    <div>
      this is main
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

MainLayout.propTypes = {};

export default MainLayout;
