// views/EventView.js

import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const EventView = ({ evento, handleSeleccionarOpcion }) => {
  const estiloEvento = StyleSheet.create({
    contenedor: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 10,
    },
    title: {
      color: evento.estilo.color,
      backgroundColor: "#D19562",
      borderRadius: 20,
      padding: 10,
      fontSize: 30,
      textAlign: "center",
      width: "80%",
      fontWeight: "bold",
      marginBottom: 16,
      marginTop: 50,
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: 10,
    },
    description: {
      width: "65%",
      color: evento.estilo.color,
      fontSize: 15,
      textAlign: "justify",
    },
    texto: {
      width: "100%",
      borderRadius: 10,
      margin: 10,
      backgroundColor: evento.estilo.backgroundColor,
    },
    cuadro: {
      flex: 1,
      borderRadius: 10,
      backgroundColor: "red",
      padding: 10,
      margin: 20,
      flexDirection: "row",
      alignContent: "center",
      alignItems: "center",
      gap: 10,
    },
    line: {
      width: "100%",
      height: 2,
      backgroundColor: evento.estilo.color,
      marginBottom: 16,
    },
    opcionButton: {
      backgroundColor: "red",
      margin: 10,
      padding: 15,
      borderRadius: 10,
      color: "white",
    },
    opcionButtonText: { color: "white", fontSize: 15 },
  });

  return (
    <ImageBackground source={evento.fondo} style={{flex:1}}>
      <ScrollView style={{flex: 1,}}>
        <View style={estiloEvento.contenedor}>
          <Text style={estiloEvento.title}>{evento.titulo}</Text>
          <View style={estiloEvento.texto}>
            {evento.descripciones.map((descripcion, index) => (
              <View key={index} style={estiloEvento.cuadro}>
                <Image source={descripcion.imagen} style={estiloEvento.image} />
                <Text style={estiloEvento.description}>
                  {descripcion.dialogo}
                </Text>
              </View>
            ))}
          </View>
          <View style={estiloEvento.line}></View>

          {evento.opciones.map((opcion, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleSeleccionarOpcion(opcion.desenlace)}
              style={estiloEvento.opcionButton}
            >
              <Text style={estiloEvento.opcionButtonText}>{opcion.titulo}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
export default EventView;
