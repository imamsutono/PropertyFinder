"use strict";

import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export default class PropertyView extends Component {
  render() {
    var property = this.props.property;
    var stats = property.bedroom_number + " bedroom " + property.property_type;
    if (property.bathroom_number) {
      stats += "and " + property.bathroom_number + " bathroom";
    }

    var price = property.price_formatted.split(" ")[0];

    return (
      <View style={styles.container}>
        <Image style={styles.bigImage} source={{ uri: property.img_url }} />
        <View style={styles.heading}>
          <Text style={styles.price}>{price}</Text>
          <Text style={styles.title}>{property.title}</Text>
          <View style={styles.separator} />
        </View>
        <Text style={styles.description}>{stats}</Text>
        <Text style={styles.description}>{property.summary}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 65
  },
  heading: {
    backgroundColor: "#F8F8F8",
    padding: 8
  },
  separator: {
    height: 1,
    backgroundColor: "#DDDDDD"
  },
  bigImage: {
    width: 400,
    height: 300
  },
  descContainer: {
    padding: 8
  },
  price: {
    fontSize: 20,
    color: "#656565"
  },
  description: {
    fontSize: 18,
    margin: 8,
    color: "#656565"
  }
});
