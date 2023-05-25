// views/InicioView.js

import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const InicioView = () => {
  return (
    <ImageBackground
      source={require("./assets/fondo-inicio.jpg")}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Obsolescencia</Text>
        <View style={styles.options}>
          <TouchableOpacity style={styles.boton}>
            <Text style={styles.textoboton}>Iniciar</Text>
            <Text style={styles.textoboton}>Creditos</Text>
            <Text style={styles.textoboton}>Creditos</Text>
            <Text style={styles.textoboton}>Pendiente</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 16,
    color: "white",
    textAlign: "center",
    margin: 40,
  },
  options: {
    backgroundColor: "red",
    borderRadius: 20,
    opacity: 0.8,
    width: "80%",
    height: 500,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  boton: {},
  textoboton: {},
});

export default InicioView;
