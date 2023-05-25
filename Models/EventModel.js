// models/EventModel.js

const events = {
    iniciar: {
        descripcion: "Marcus es un soldado entrenado y experimentado que es enviado a una misión en África para detener a un grupo de rebeldes. Sin embargo, durante la operación, su unidad es emboscada y eliminada por un misterioso grupo de androides. Con todo su equipo muerto y desorientado, Marcus emprende una peligrosa travesía en busca de civilización.",
        // imagen: require('./assets/marcus.jpg'),
        estilo: {
          backgroundColor: 'black',
          color: 'white',
        },
        opciones: [
          {
            titulo: "Entrar al auto",
            desenlace: "enfrentamientoCyborg"
          },
          {
            titulo: "Correr hacia la puerta",
            desenlace: "desenlacePuerta"
          }
        ]
      },

    
      // Agrega más eventos y desenlaces según sea necesario
  };
  
  export default {
    getEvent: (eventoActual) => events[eventoActual],
  };
  