// views/EventView.js

import React from "react";
import { View, Text,ScrollView, StyleSheet, Image, TouchableOpacity } from "react-native";

const EventView = ({ evento, handleSeleccionarOpcion }) => {
  const estiloEvento = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: evento.estilo.backgroundColor,
      alignItems: "center",
      justifyContent: "center",
      padding: 16,
    },
    title: {
      color: evento.estilo.color,
      fontSize: 32,
      fontWeight: "bold",
      marginBottom: 16,
    },
    image: {
      width: 200,
      height: 200,
      marginBottom: 16,
    },
    description: {
      color: evento.estilo.color,
      fontSize: 18,
      // backgroundColor: "white",
      textAlign: "center",
      margin: 30,
    },
    line: {
      width: "100%",
      height: 2,
      backgroundColor: evento.estilo.color,
      marginBottom: 16,
    },
    opcionButton:{backgroundColor:"red",margin:10,padding:15,borderRadius:10,color:"white"},
    opcionButtonText:{color:"white",fontSize:15}
  });

  return (
   
        <ScrollView contentContainerStyle={estiloEvento.container}>
        <Text style={estiloEvento.title}>Juego</Text>
        <Text style={estiloEvento.description}>{evento.descripcion}</Text>
        <Image source={evento.imagen} style={estiloEvento.image} />
       
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
    </ScrollView>
  );
};

export default EventView;
