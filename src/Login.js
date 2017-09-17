import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  StatusBar
} from "react-native";

export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.logoContainer}>
          <Image
            source={require("../resources/icon.png")}
            style={styles.logo}
          />
          <Text style={styles.tagline}>We Found Property For Your Needs</Text>
        </View>
        <View style={styles.row}>
          <TextInput
            placeholder="Username or Email"
            placeholderTextColor="rgba(255,255,255,0.5)"
            returnKeyType="next"
            onSubmitEditing={() => this.passwordInput.focus()}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.inputText}
          />
        </View>
        <View style={styles.row}>
          <TextInput
            placeholder="Password"
            placeholderTextColor="rgba(255,255,255,0.5)"
            returnKeyType="go"
            secureTextEntry={true}
            style={styles.inputText}
            ref={input => (this.passwordInput = input)}
          />
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginLabel}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#42A5F5"
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center"
  },
  logo: {
    height: 100,
    width: 100
  },
  tagline: {
    color: "rgba(255,255,255,0.6)",
    marginTop: 8,
    width: 150,
    textAlign: "center",
    fontSize: 16
  },
  row: {
    height: 48,
    flexDirection: "column",
    marginBottom: 8
  },
  inputText: {
    backgroundColor: "#64B5F6",
    color: "#FFF",
    padding: 8,
    flex: 1
  },
  loginButton: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    justifyContent: "center",
    borderRadius: 24,
    borderColor: "#FFF",
    borderWidth: 2
  },
  loginLabel: {
    color: "#1E88E5",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600"
  }
});
