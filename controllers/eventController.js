'use strict';

const eventoQuery = require('../data/events');
const bodyparser = require('body-parser')

const jsonParser = bodyparser.json();

//CANCHA
const getCanchas = async(req,res,next) =>{
    try {
        const read = await eventoQuery.readCanchas();
        res.send(read);
    } catch (error) {
        res.status(400).send(error.message);
        }
}

const getCancha = async(req,res,next) =>{
    try {
        const id = req.params.id
        const read = await eventoQuery.readCanchasById(id);
        res.send(read);
    } catch (error) {
        res.status(400).send(error.message);
        }
}

const addCancha = async(req,res,next) =>{
    try {
        const data = req.body;
        const created = await eventoQuery.insertCancha(data);
        res.send(created)
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateCanchaPrecio = async(req,res,next) =>{
    try {
        const id = req.params.id;
        const data = req.body;
        const updated = await eventoQuery.updateCanchaPrecio(id,data);
        res.send(updated)
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateCanchaEstado = async(req,res,next) =>{
    try {
        const id = req.params.id;
        const data = req.body;
        const updated = await eventoQuery.updateCanchaEstado(id,data);
        res.send(updated)
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const updateCancha = async(req,res,next) =>{
    try {
        const id = req.params.id;
        const data = req.body;
        const updated = await eventoQuery.updateCancha(id,data);
        res.send(updated)
    } catch (error) {
        res.status(400).send(error.message);
    }
}
//ESTADO
const addEstado = async(req,res,next) =>{
    try {
        const data = req.body;
        const created = await eventoQuery.insertEstado(data);
        res.send(created)
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getEstados = async(req,res,next) =>{
    try {
        const read = await eventoQuery.readEstados();
        res.send(read);
    } catch (error) {
        res.status(400).send(error.message);
        }
}

const getEstado = async(req,res,next) =>{
    try {
        const id = req.params.id
        const read = await eventoQuery.readEstadoById(id);
        res.send(read);
    } catch (error) {
        res.status(400).send(error.message);
        }
}

const updateEstado = async(req,res,next) =>{
    try {
        const id = req.params.id;
        const data = req.body;
        const updated = await eventoQuery.updateEstado(id,data);
        res.send(updated)
    } catch (error) {
        res.status(400).send(error.message);
    }
}
//HORARIO
const addHorario = async(req,res,next) =>{
    try {
        const data = req.body;
        const created = await eventoQuery.insertHorario(data);
        res.send(created)
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getHorario = async(req,res,next) =>{
    try {
        const fecha = req.params.fecha
        const read = await eventoQuery.readHorarioByFecha(fecha);
        res.send(read);
    } catch (error) {
        res.status(400).send(error.message);
        }
}

//RESERVA
const addReserva = async(req,res,next) =>{
    try {
        const data = req.body;
        const created = await eventoQuery.insertReserva(data);
        res.send(created)
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getReservas = async(req,res,next) =>{
    try {
        const read = await eventoQuery.readReservas();
        res.send(read);
    } catch (error) {
        res.status(400).send(error.message);
        }
}

const getReservasByUsuario = async(req,res,next) =>{
    try {
        const usuario = req.params.usuario
        const read = await eventoQuery.readReservasByUsuario(usuario);
        res.send(read);
    } catch (error) {
        res.status(400).send(error.message);
        }
}

const updateReserva = async(req,res,next) =>{
    try {
        const id = req.params.id;
        const data = req.body;
        const updated = await eventoQuery.updateReserva(id,data);
        res.send(updated)
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteReserva = async(req,res,next) =>{
    try {
        const id = req.params.id;
        const eliminar = await eventoQuery.deleteReserva(id);
        res.send(eliminar)
    } catch (error) {
        res.status(400).send(error.message);
    }
}



module.exports = {
    //Cancha
    getCanchas,
    getCancha,
    addCancha,
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
}