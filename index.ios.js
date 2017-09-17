"use strict";

import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from "react-native";
import Login from "./src/Login";

class PropertyFinder extends Component {
  render() {
    return (
      /*<NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: "Property Finder",
          component: Login
        }}
      />*/
      <Login />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent("PropertyFinder", () => PropertyFinder);
