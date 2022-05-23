import React from "react";
import Additional from "./Additional/Additional";
import Main from "./Main/Main";
import "./Right.scss";

function Right() {
  return (
    <div className="right-container">
      <Main />
      <Additional />
    </div>
  );
}

export default Right;
