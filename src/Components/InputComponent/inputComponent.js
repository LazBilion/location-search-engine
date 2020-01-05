import React, { Component } from "react";

import classes from "./inputComponent.module.css";
import { API_REQUEST } from "Helpers/helpers";

class InputComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      array: []
    };
  }

  getList = () => {
    let limit;
    switch (true) {
      case window.innerWidth < 768:
        limit = 10;
        break;
      case window.innerWidth < 985:
        limit = 20;
        break;
      default:
        limit = 25;
    }

    !this.state.keyword
      ? this.setState({ array: [] })
      : fetch(`${API_REQUEST}${this.state.keyword}&language=en&limit=${limit}`)
          .then(locationEntries => locationEntries.json())
          .then(locationEntries => {
            this.setState({ array: locationEntries.entries });
            console.log(this.state.array);
          });
  };

  handleChange = e => {
    this.setState({ keyword: e.target.value });
    if (this.state.keyword.length >= 1) {
      clearTimeout(this.pauseTime);
      this.pauseTime = setTimeout(() => {
        this.getList();
      }, 1000);
    }
  };

  handleClick = event => {
    console.log(event);
    event.persist();
    this.setState({ keyword: event.target.innerText });
  };

  render() {
    return (
      <div>
        <input
          className={classes.inputField}
          type="text"
          onChange={this.handleChange}
          value={this.state.keyword}
        />
        <div className={classes.autocompleteList}>
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
      </div>
    );
  }
}

export default InputComponent;
