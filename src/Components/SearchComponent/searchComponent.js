import React from "react";

import classes from "./searchComponent.module.css";
import InputComponent from "Components/InputComponent";
import { FaUser } from "react-icons/fa";

const SearchComponent = () => {
  return (
    <div className={classes.searchComponent}>
      <div className={classes.imageThumbnail}>
        <FaUser />
      </div>
      <div className={classes.searchHeader}>
        <h1>What place are you looking for:</h1>
        <InputComponent />
      </div>
    </div>
  );
};

export default SearchComponent;
