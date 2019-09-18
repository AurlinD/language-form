import React from "react";
import UserCreate from "./UserCreate";
class App extends React.Component {
  state = { language: "english" };

  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className="flag nl"
            onClick={() => this.onLanguageChange("dutch")}
          />
          <i
            className="flag in"
            onClick={() => this.onLanguageChange("punjabi")}
          />
          <i
            className="flag jp"
            onClick={() => this.onLanguageChange("japanese")}
          />
        </div>
        <UserCreate></UserCreate>
      </div>
    );
  }
}

export default App;