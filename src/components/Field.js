import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends React.Component {
  static contextType = LanguageContext;
  render() {
    //const text = this.context === "english" ? "Name" : "Naam";

    const text = this.context;
    var name;
    var location;

    if (text === "english") {
      name = "Name";
    } else if (text === "dutch") {
      name = "Naam";
    } else if (text === "punjabi") {
      name = "ਨਾਮ";
    } else if (text === "japanese") {
      name = "私";
    }

    if (text === "english") {
      location = "City";
    } else if (text === "dutch") {
      location = "Stad";
    } else if (text === "punjabi") {
      location = "ਤਸ਼ਹਿਰ";
    } else if (text === "japanese") {
      location = "シティ";
    }

    return (
      <div className="ui field">
        <label>{name}</label>
        <input></input>
        <label>{location}</label>
        <input></input>
      </div>
    );
  }
}

export default Field;
