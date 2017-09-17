"use strict";

import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from "react-native";
import Register from "./src/Register";

class PropertyFinder extends Component {
  render() {
    return (
      /*<NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: "Property Finder",
          component: Register
        }}
      />*/
      <Register />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent("PropertyFinder", () => PropertyFinder);
