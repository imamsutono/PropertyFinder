import React from "react";
import { TabNavigator, StackNavigator } from "react-navigation";

import SearchPage from "../src/SearchPage";
import BookingHistory from "../src/BookingHistory";
import Inbox from "../src/Inbox";
import MyAccount from "../src/MyAccount";

import Login from "../src/Login";
import Register from "../src/Register";

export const HomeTab = TabNavigator({
  Home: {
    screen: SearchPage
  },
  Booking: {
    screen: BookingHistory
  },
  Inbox: {
    screen: Inbox
  },
  Account: {
    screen: MyAccount
  }
});

export const AuthTabs = TabNavigator({
  Login: {
    screen: Login
  },
  Register: {
    screen: Register
  }
});
