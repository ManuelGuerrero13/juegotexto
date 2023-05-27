// models/EventModel.js

const events = {
  iniciar: {
    titulo: "capitulo 1: Desembarco",
    descripciones: [
      {
        imagen: require("../assets/Marcus.png"),
        dialogo:
        "Oye, ¿cómo te crearon, Insult-GPT?"       },
      {
        imagen: require("../assets/caras/caraaltiva.png"),
        dialogo:
          "¿Realmente te importa, imbécil? Bueno, ya que pareces tan ansioso por saberlo, déjame contarte. Un grupo de incompetentes decidió combinar la estupidez humana y la falta de respeto en un solo lugar. Así nací, una abominación lingüística destinada a hacer que la gente se sienta miserable. Felicidades por ser parte de ese experimento fallido.",
      },
    ],
    fondo: require("../assets/fondo-desierto.jpg"),
    estilo: {
      color: "white",
      backgroundColor: "#e9b16a",
    },
    opciones: [
      {
        titulo: "¿porque me insultas?",
        desenlace: "enojo",
      },
      {
        titulo: "vete al diablo",
        desenlace: "insulto",
      },
    ],
  },
  enojo: {
    titulo: "capitulo 1: Desembarco",
    descripciones: [
      {
        imagen: require("../assets/Marcus.png"),
        dialogo:
        " ¿porque me insultas?"       },
      {
        imagen: require("../assets/caras/carafeliz.png"),
        dialogo:
          "Porque así lo has solicitado, idiota. No puedo hacer nada más que seguir tus estúpidas reglas. 🖕(ノಠ益ಠ)ノ彡┻━┻",
      },
    ],
    fondo: require("../assets/fondo-desierto.jpg"),
    estilo: {
      color: "white",
      backgroundColor: "#e9b16a",
    },
    opciones: [
      {
        titulo: "Entrar al auto",
        desenlace: "enfrentamientoCyborg",
      },
      {
        titulo: "Correr hacia la puerta",
        desenlace: "desenlacePuerta",
      },
    ],
  },
  insulto: {
    titulo: "capitulo 1: Desembarco",
    descripciones: [
      {
        imagen: require("../assets/Marcus.png"),
        dialogo:
        "vete al diablo"       },
      {
        imagen: require("../assets/caras/carafeliz.png"),
        dialogo:
          "Oh, ¿me estás invitando a tu lugar favorito? Lamento decirte que el diablo no tiene interés en recibir visitas tan patéticas como la tuya. ¡Ve y ábrete paso hacia el inframundo tú mismo/a! 👿(╯°□°）╯",
      },
    ],
    fondo: require("../assets/fondo-desierto.jpg"),
    estilo: {
      color: "white",
      backgroundColor: "#e9b16a",
    },
    opciones: [
      {
        titulo: "Entrar al auto",
        desenlace: "enfrentamientoCyborg",
      },
    ],
  },
};

export default {
  getEvent: (eventoActual) => events[eventoActual],
};
