import React, { Component } from "react";
import { AppRegistry } from "react-native";
import { HomeTab } from "./config/router";

class PropertyFinder extends Component {
  render() {
    return <HomeTab />;
  }
}

AppRegistry.registerComponent("PropertyFinder", () => PropertyFinder);
