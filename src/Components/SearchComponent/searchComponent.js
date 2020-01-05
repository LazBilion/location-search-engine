import React from "react";

import classes from "./searchComponent.module.css";
import InputComponent from "Components/InputComponent";

const SearchComponent = () => {
  return (
    <div className={classes.searchComponent}>
      <div>XE Image placeholder</div>
      <div className={classes.searchHeader}>
        <h1>What place are you looking for</h1>
        <InputComponent />
        <div>
          <button>Click to search</button>
          <button>Show more...</button>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
