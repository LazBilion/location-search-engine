import React from "react";

import classes from "./app.module.css";
import Banner from "Components/Banner";
import SearchComponent from "Components/SearchComponent";

const App = () => {
  return (
    <div className={classes.appContainer}>
      <div className={classes.searchEngineContainer}>
        <SearchComponent />
      </div>
      <div className={classes.bannerContainer}>
        <Banner />
      </div>
    </div>
  );
};

export default App;
