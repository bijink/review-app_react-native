import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header({ title }) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    // width: "100%",
    width: "110%",
    flexDirection: "row",
    alignItem: "center",
    justifyContent: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 25,
    color: "#333",
    letterSpacing: 1,
  },
});
