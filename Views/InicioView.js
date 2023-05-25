

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from '@react-navigation/native';
const carafeliz = require("../assets/caras/carafeliz.png");
const caraemocionada = require("../assets/caras/caraemocionada.png");
const caraenojada = require("../assets/caras/caraenojada.png");
const carapreocupada = require("../assets/caras/carapreocupada.png");

const InicioView = () => {
  const navegacion = useNavigation();
  const handlePress = () => {
    navegacion.navigate('Evento');
  };
  return (
    <ImageBackground
      source={require("../assets/fondo-inicio.jpg")}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Obsolescencia</Text>
        <View style={styles.options}>
          <TouchableOpacity style={styles.boton} onPress={handlePress}>
            <Image source={carafeliz} style={styles.caras}></Image>
            <Text style={styles.textoboton}>Iniciar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.boton}>
            <Image source={caraemocionada} style={styles.caras2}></Image>
            <Text style={styles.textoboton}>Creditos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.boton}>
            <Image source={carapreocupada} style={styles.caras}></Image>
            <Text style={styles.textoboton}>Creditos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.boton}>
            <Image source={caraenojada} style={styles.caras2}></Image>
            <Text style={styles.textoboton}>Pendiente</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};
export default InicioView;
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
    backgroundColor: "rgba(14,21,79,0.9)",
    width: "80%",
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#1872ba",
    textAlignVertical: "center",
    height: 80,
  },
  options: {
    backgroundColor: "#0f1244",
    borderWidth: 5,
    borderColor: "#0c7faf",
    borderRadius: 20,
    opacity: 0.8,
    width: "80%",
    height: 500,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "space-around",
  },
  boton: {
    backgroundColor: "#321a7c",
    width: "80%",
    height: 60,
    justifyContent: "center",
    borderRadius: 20,
  },
  textoboton: { color: "white", textAlign: "center", fontSize: 20 },
  caras: {
    position: "absolute",
    width: 60,
    height: 60,
    borderRadius: 30,
    top: -20,
    left: -10,
    opacity: 0.8,
    transform: [{ rotate: "-45deg" }],
  },
  caras2: {
    position: "absolute",
    width: 60,
    height: 60,
    borderRadius: 30,
    right: -10,
    opacity: 0.8,
  },
});

