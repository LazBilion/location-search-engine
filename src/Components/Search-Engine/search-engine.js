import React, { Component } from "react";

import classes from "./search-engine.module.css";
import { API_REQUEST, USER_LANGUAGES } from "Helpers/helpers";

class SearchEngine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      array: [],
      buttonDisabled: true,
      display: "none",
      language: "en"
    };
  }

  getList = () => {
    let limit;
    switch (true) {
      case window.innerWidth < 600:
        limit = 10;
        break;
      case window.innerWidth < 768:
        limit = 20;
        break;
      default:
        limit = 25;
    }

    !this.state.keyword
      ? this.setState({ array: [], buttonDisabled: true, display: "none" })
      : fetch(
          `${API_REQUEST}${this.state.keyword}&language=${this.state.language}&limit=${limit}`
        )
          .then(locationEntries => locationEntries.json())
          .then(locationEntries => {
            this.setState({ array: locationEntries.entries });
            this.state.array.length === 0
              ? this.setState({ buttonDisabled: true, display: "none" })
              : this.setState({ buttonDisabled: false, display: "block" });
          });
  };

  detectLanguage = () => {
    let text = document.getElementById("searchInput").value.replace(/\s/g);
    Object.entries(USER_LANGUAGES).forEach(([key, value]) => {
      if (value.test(text) === true) {
        this.setState({ language: key });
      }
    });
  };

  handleChange = e => {
    this.setState({ keyword: e.target.value });
    if (this.state.keyword.length >= 1) {
      clearTimeout(this.pauseTime);
      this.pauseTime = setTimeout(() => {
        this.detectLanguage();
        this.getList();
      }, 1000);
    }
  };

  handleClick = event => {
    event.persist();
    this.setState({ keyword: event.target.innerText });
  };

  handleSearchGoogle = () => {
    window.open(`//google.com/search?q=${this.state.keyword}`, "_blank");
  };

  handleShowMore = () =>
    console.log(
      `Yet to implemented... It should refresh list to show the next 10-25 relevant searches`
    );

  render() {
    return (
      <div>
        <input
          className={classes.inputField}
          id="searchInput"
          type="text"
          onChange={this.handleChange}
          value={this.state.keyword}
        />
        <div
          className={classes.autocompleteList}
          style={{ display: this.state.display }}
        >
          <ul>
            {this.state.array.map((location, index) => {
              return (
                <li key={index} onClick={this.handleClick}>
                  {location.name}
                </li>
              );
            })}
          </ul>
        </div>
        <div className={classes.buttonContainer}>
          <button
            className={classes.googleSearch}
            onClick={this.handleSearchGoogle}
            disabled={this.state.buttonDisabled}
          >
            Click to search
          </button>
          <button className={classes.showMore} onClick={this.handleShowMore}>
            Show more...
          </button>
        </div>
      </div>
    );
  }
}

export default SearchEngine;
