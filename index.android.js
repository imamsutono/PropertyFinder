import React, { Component } from "react";
import { AppRegistry } from "react-native";
import SearchPage from "./src/SearchPage";

class PropertyFinder extends Component {
  render() {
    return <SearchPage />;
  }
}

AppRegistry.registerComponent("PropertyFinder", () => PropertyFinder);
