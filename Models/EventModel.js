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
      enfrentamientoCyborg: {
        descripcion: "Marcus es un individuo de aproximadamente treinta años, con una constitución atlética y una determinación inquebrantable. Sus ojos oscuros reflejan una combinación de miedo y valentía mientras se enfrenta a la amenaza de un cyborg implacable.",
        // imagen: require('./assets/enfrentamiento.jpg'),
        estilo: {
          backgroundColor: 'red',
          color: 'white',
        },
        opciones: [
          {
            titulo: "Pendiente",
            desenlace: "pendiente1"
          },
          {
            titulo: "Pendiente",
            desenlace: "pendiente2"
          },
          {
            titulo: "Pendiente",
            desenlace: "pendiente3"
          }
        ]
      },
      desenlacePuerta: {
        descripcion: "Aquí puedes agregar la descripción y opciones para el desenlace de la puerta.",
        // imagen: require('./assets/desenlace_puerta.jpg'),
        estilo: {
          backgroundColor: 'green',
          color: 'white',
        },
        opciones: [
            {
                titulo: "Pendiente",
                desenlace: "pendiente1"
              },
              {
                titulo: "Pendiente",
                desenlace: "pendiente2"
              },
              {
                titulo: "Pendiente",
                desenlace: "pendiente3"
              }
        ]
      },
      pendiente1: {
        descripcion: "Aquí puedes agregar la descripción y opciones para el pendiente 1.",
        // imagen: require('./assets/pendiente1.jpg'),
        estilo: {
          backgroundColor: 'blue',
          color: 'white',
        },
        opciones: [
            {
                titulo: "Pendiente",
                desenlace: "pendiente1"
              },
              {
                titulo: "Pendiente",
                desenlace: "pendiente2"
              },
              {
                titulo: "Pendiente",
                desenlace: "pendiente3"
              }
        ]
      },
      pendiente2: {
        descripcion: "Aquí puedes agregar la descripción y opciones para el pendiente 2.",
        // imagen: require('./assets/pendiente2.jpg'),
        estilo: {
          backgroundColor: 'purple',
          color: 'white',
        },
        opciones: [
            {
                titulo: "Pendiente",
                desenlace: "pendiente1"
              },
              {
                titulo: "Pendiente",
                desenlace: "pendiente2"
              },
              {
                titulo: "Pendiente",
                desenlace: "pendiente3"
              }
        ]
      },
      pendiente3: {
        descripcion: "Aquí puedes agregar la descripción y opciones para el pendiente 3.",
        // imagen: require('./assets/pendiente3.jpg'),
        estilo: {
          backgroundColor: 'orange',
          color: 'white',
        },
        opciones: [
            {
                titulo: "Pendiente",
                desenlace: "pendiente1"
              },
              {
                titulo: "Pendiente",
                desenlace: "pendiente2"
              },
              {
                titulo: "Pendiente",
                desenlace: "pendiente3"
              }
        ]
      },
      // Agrega más eventos y desenlaces según sea necesario
  };
  
  export default {
    getEvent: (eventoActual) => events[eventoActual],
  };
  