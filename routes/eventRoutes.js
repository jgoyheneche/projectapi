'use strict';

const express = require('express');
const eventController = require('../controllers/eventController');
const router = express.Router();

const {
    //Cancha
    getCanchas,
    addCancha,
    getCancha,
    updateCancha,
    //Estado
    getEstados,
    getEstado,
    addEstado,
    updateEstado,
    //Horario
    addHorario,
    getHorario,
    //RESERVA
    addReserva,
    getReservas,
    getReservasByUsuario,
    updateReserva,
    deleteReserva
} = eventController;

//Cancha
router.get('/cancha',getCanchas);
router.get('/cancha/:id',getCancha);
router.post('/cancha',addCancha);
router.put('/cancha/:id',updateCancha);
//Estado
router.get('/estado',getEstados);
router.get('/estado/:id',getEstado);
router.post('/estado',addEstado);
router.put('/estado/:id',updateEstado);
//Horario
router.post('/horario',addHorario);
router.get('/horario/:fecha',getHorario)
//RESERVA
router.post('/reserva',addReserva);
router.get('/reserva',getReservas);
router.get('/reserva/:usuario',getReservasByUsuario);

router.put('/reserva/:id',updateReserva);
router.delete('/reserva/:id',deleteReserva);

module.exports = {
    routes: router
}

