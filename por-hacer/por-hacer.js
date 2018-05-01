const fs = require('fs');



let listadoPorHacer = []; // Almacenar todo en un arreglo.


const guardarDB = () => { // FUncion para guardar

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        // Defino el error
        if (err) throw new Error('No se pudo grabar', err);

    });

}

const cargarDB = () => {

    try {

        listadoPorHacer = require('../db/data.json');

    } catch (error) {

        listadoPorHacer = [];

    }

}


const crear = (descripcion) => { // Función
    // Antes de hacer un push cargar la base de datos.
    cargarDB();

    let porHacer = { // Objeto porHacer
        descripcion,
        completado: false
    };

    //Guarda el Objeto en un Arreglo.
    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
}


const getListado = () => {
    cargarDB();
    return listadoPorHacer;

}


const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false
    }
}


const borrar = (descripcion) => {

    cargarDB();

    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}