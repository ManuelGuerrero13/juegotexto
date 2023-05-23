// controllers/EventController.js

import React, { useState } from 'react';
import EventModel from '../Models/EventModel';
import EventView from '../Views/EventView';

const EventController = () => {
  const [eventoActual, setEventoActual] = useState('iniciar');

  const handleSeleccionarOpcion = (desenlace) => {
    setEventoActual(desenlace);
  };

  const evento = EventModel.getEvent(eventoActual);

  return <EventView evento={evento} handleSeleccionarOpcion={handleSeleccionarOpcion} />;
};

export default EventController;
