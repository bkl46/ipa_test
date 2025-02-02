import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function App() {
  const [isON, setIsON] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: isON ? "green" : "white" }]}
        onPress={() => setIsON(!isON)}
      >
        <Text style={styles.text}>{ isON ? 'Klariti Mode: ON' : 'Klariti Mode: OFF'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "black",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
