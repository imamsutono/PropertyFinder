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

export default class Register extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.logoContainer}>
          <Image
            source={require("../resources/icon.png")}
            style={{ height: 100, width: 100 }}
          />
          <Text style={styles.tagline}>
            Let's Find Your Dream Property Easily
          </Text>
        </View>
        <View style={styles.row}>
          <TextInput
            placeholder="Username"
            placeholderTextColor="rgba(255,255,255,0.5)"
            returnKeyType="next"
            onSubmitEditing={() => this.emailInput.focus()}
            autoCapitalize="none"
            style={styles.inputText}
          />
        </View>
        <View style={styles.row}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="rgba(255,255,255,0.5)"
            returnKeyType="next"
            onSubmitEditing={input => this.phoneInput.focus()}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.inputText}
            ref={input => (this.emailInput = input)}
          />
        </View>
        <View style={styles.row}>
          <TextInput
            placeholder="Phone"
            placeholderTextColor="rgba(255,255,255,0.5)"
            returnKeyType="next"
            keyboardType="numeric"
            style={styles.inputText}
            ref={input => (this.phoneInput = input)}
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
          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerLabel}>REGISTER</Text>
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
  tagline: {
    color: "rgba(255,255,255,0.6)",
    marginTop: 8,
    width: 160,
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
  registerButton: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    justifyContent: "center",
    borderRadius: 24,
    borderColor: "#FFF",
    borderWidth: 2,
    marginBottom: 4
  },
  registerLabel: {
    color: "#1E88E5",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600"
  }
});
