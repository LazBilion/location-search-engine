import React from "react";

import classes from "./searchComponent.module.css";
import SearchEngine from "Components/Search-Engine";
import thumbnail from "thumbnail/XEthumbnail.png";

const SearchComponent = () => {
  return (
    <div className={classes.searchComponent}>
      <div className={classes.thumbnailContainer}>
        <img
          className={classes.thumbnailImage}
          src={thumbnail}
          alt="XE logo thumbnail"
        />
      </div>
      <div className={classes.searchInput}>
        <h1>What place are you looking for?</h1>
        <SearchEngine />
      </div>
    </div>
  );
};

export default SearchComponent;
