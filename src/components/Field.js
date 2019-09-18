import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends React.Component {
  static contextType = LanguageContext;
  render() {
    //const text = this.context === "english" ? "Name" : "Naam";

    const text = this.context;
    var name;
    var location;
    var colorChoose;
    var red;
    var blue;
    var yellow;

    if (text === "english") {
      name = "Name";
      location = "City";
      colorChoose = "Favorite Color";
      red = "Red";
      blue = "Blue";
      yellow = "Yellow";
    } else if (text === "dutch") {
      name = "Naam";
      location = "Stad";
      colorChoose = "Lievelingskleur";
      red = "Rood";
      blue = "Blauw";
      yellow = "Geel";
    } else if (text === "punjabi") {
      name = "ਨਾਮ";
      location = "ਤਸ਼ਹਿਰ";
      colorChoose = "ਪਸੰਦੀਦਾ ਰੰਗ";
      red = "ਲਾਲ";
      blue = "ਨੀਲਾ";
      yellow = "ਪੀਲਾ";
    } else if (text === "japanese") {
      name = "私";
      location = "シティ";
      colorChoose = "好きな色";
      red = "赤";
      blue = "青";
      yellow = "黄";
    }

    return (
      <div className="ui field">
        <label>{name}</label>
        <input></input>
        <label>{location}</label>
        <input></input>
        <label>{colorChoose}</label>
        <button className="ui red button">{red}</button>
        <button className="ui yellow button">{yellow}</button>
        <button className="ui blue button">{blue}</button>
      </div>
    );
  }
}

export default Field;
