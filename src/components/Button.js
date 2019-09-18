import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {
  // this is how you hook up context with a class component
  static contextType = LanguageContext;

  render() {
    const text = this.context;
    var button;

    if (text === "english") {
      button = "Submit";
    } else if (text === "dutch") {
      button = "Voorleggen";
    } else if (text === "punjabi") {
      button = "ਜਮ੍ਹਾਂ ਕਰੋ";
    } else if (text === "japanese") {
      button = "申し出る";
    }

    return <button className="ui button primary"> {button}</button>;
  }
}

export default Button;
