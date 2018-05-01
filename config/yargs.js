const opts = {
    descripcion: {
        demand: true, //obligatorio
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    },
    completado: {
        default: true,
        alis: 'c',
        desc: 'Marca completada la tarea'
    }
}


const argv = require('yargs')
    .command('listar', 'Imprime la lista de tareas', {})
    .command('crear', 'Crea una tarea', opts)
    .command('actualizar', 'Actualiza el estado de una lista', opts)
    .command('borrar', 'Borra una tarea', opts)
    .help()
    .argv;

module.exports = {
    argv
}