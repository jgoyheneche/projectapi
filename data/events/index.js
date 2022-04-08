'use strict';

const utils = require('../util');
const config = require('../../config');
const sql = require('mssql');

//CANCHAS
const readCanchas = async () =>{
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const list = await pool.request().query(sqlQueries.readCanchas);
        return list.recordset;
    } catch (error) {
        return error.message;        
    }
}

const readCanchasById = async (id) =>{
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const oneEvent = await pool.request().input('Id',sql.Int, id).query(sqlQueries.readCanchasById);
        return oneEvent.recordset;
    } catch (error) {
        return error.message;        
    }
}

const insertCancha = async(data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const insertEvent = await pool.request().input('Cancha',sql.NVarChar(100),data.cancha).input('Precio',sql.Decimal(18,4),data.precio).query(sqlQueries.insertCancha);
        return insertEvent.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateCancha = async(id, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const update = await pool.request().input('Id',sql.Int,id)
        .input('Cancha',sql.NVarChar(100),data.cancha)
        .input('Precio',sql.Decimal(18,4),data.precio)
        .input('Activo',sql.Bit,data.activo)
        .query(sqlQueries.updateCancha);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

//ESTADO
const readEstados = async () =>{
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const list = await pool.request().query(sqlQueries.readEstados);
        return list.recordset;
    } catch (error) {
        return error.message;        
    }
}

const readEstadoById = async (id) =>{
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const oneEvent = await pool.request().input('Id',sql.Int, id).query(sqlQueries.readEstadoById);
        return oneEvent.recordset;
    } catch (error) {
        return error.message;        
    }
}

const insertEstado = async(data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const insertEvent = await pool.request().input('Estado',sql.NVarChar(100),data.estado).query(sqlQueries.insertEstado);
        return insertEvent.recordset;
    } catch (error) {
        return error.message;
    }
}
const updateEstado = async(id, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const update = await pool.request().input('Id',sql.Int,id)
        .input('Estado',sql.NVarChar(100),data.estado)
        .input('Activo',sql.Bit,data.activo)
        .query(sqlQueries.updateEstado);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}
//HORARIO
const insertHorario = async(data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const insertEvent = await pool.request().input('fecha',sql.DateTime,data.fecha).query(sqlQueries.insertHorario);
        return insertEvent.recordset;
    } catch (error) {
        return error.message;
    }
}

const readHorarioByFecha = async (fecha) =>{
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const oneEvent = await pool.request().input('fecha',sql.Date, fecha).query(sqlQueries.readHorarioByFecha);
        return oneEvent.recordset;
    } catch (error) {
        return error.message;        
    }
}

//RESERVA
const insertReserva = async(data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const insertEvent = await pool.request().input('canchahorarioid',sql.Int,data.canchahorarioid).input('username',sql.VarChar,data.username).query(sqlQueries.insertReserva);
        return insertEvent.recordset;
    } catch (error) {
        return error.message;
    }
}

const readReservas = async () =>{
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const oneEvent = await pool.request().query(sqlQueries.readReservas);
        return oneEvent.recordset;
    } catch (error) {
        return error.message;        
    }
}

const readReservasByUsuario = async (usuario) =>{
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const oneEvent = await pool.request().input('usuario',sql.VarChar, usuario).query(sqlQueries.readReservasByUsuario);
        return oneEvent.recordset;
    } catch (error) {
        return error.message;        
    }
}

const updateReserva = async(id, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const update = await pool.request().input('id',sql.Int,id)
        .input('estado',sql.Int,data.estado)        
        .query(sqlQueries.updateReserva);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteReserva = async(id) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const eliminar = await pool.request().input('id',sql.Int,id).query(sqlQueries.deleteReserva);
        return eliminar.recordset;
    } catch (error) {
        return error.message;
    }
}


module.exports = {
    //Cancha
    readCanchas,
    readCanchasById,
    insertCancha,
    updateCancha,
    //Estado    
    readEstados,
    readEstadoById,
    insertEstado,
    updateEstado,
    //Horario
    insertHorario,
    readHorarioByFecha,
    //RESERVA
    insertReserva,
    readReservas,
    readReservasByUsuario,
    updateReserva,
    deleteReserva
    
}


