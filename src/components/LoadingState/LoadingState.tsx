import React from "react";
import "./LoadingState.scss";
import Loader from "../../assets/loader.gif";

function LoadingState() {
  return (
    <div className="loading-state">
      <img src={Loader} alt="loadingstate" />
    </div>
  );
}

export default LoadingState;
