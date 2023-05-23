// views/InicioView.js

import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const InicioView = () => {
  return (
    <ImageBackground source={require("../assets/fondo-inicio.jpg")}>
      <View style={styles.container}>
        <Text style={styles.title}>Obsolescencia</Text>
        <View style={styles.options}>
          <TouchableOpacity style={styles.boton}>
            <Text style={styles.textoboton}>Iniciar</Text>
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  options:{backgroundColor:"black"},
  boton: {},
  textoboton: {},
});

export default InicioView;
