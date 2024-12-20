import React, { useState } from "react";
import "./Loading.scss";

const Loader = () => {
  return (
    <div className="loader">
      <div className="loading">
        <div className="logo"></div>
        <div className="dots animate">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
