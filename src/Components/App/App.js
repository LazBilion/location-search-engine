import React from "react";

import classes from "./app.module.css";
import Banner from "Components/Banner";
import Search from "Components/SearchComponent";

const App = () => {
  return (
    <div className={classes.appComponent}>
      <div className={classes.banner}>
        <Banner />
      </div>
      <div className={classes.searchBar}>
        <Search />
      </div>
    </div>
  );
};

export default App;
