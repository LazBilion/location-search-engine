import React from "react";

import classes from "./searchComponent.module.css";
import SearchEngine from "Components/Search-Engine";
import { FaUser } from "react-icons/fa";

const SearchComponent = () => {
  return (
    <div className={classes.searchComponent}>
      <div className={classes.thumbnailContainer}>
        <FaUser size={50} />
      </div>
      <div className={classes.searchInput}>
        <h1>What place are you looking for?</h1>
        <SearchEngine />
      </div>
    </div>
  );
};

export default SearchComponent;
