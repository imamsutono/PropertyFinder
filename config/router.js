import React from "react";
import { TabNavigator, StackNavigator } from "react-navigation";

import Login from "../src/Login";
import Register from "../src/Register";

export const AuthTabs = TabNavigator({
  Login: {
    screen: Login
  },
  Register: {
    screen: Register
  }
});
