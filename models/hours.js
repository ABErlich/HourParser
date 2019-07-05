const constants = require('../configs/constants');

class Hours {
    constructor(fecha, hours, referencia, comentario, tarea, categoria, analitica){
        this.analitica = analitica || constants.ANALITICA.TECHINT_MOA;
        this.categoria = categoria || constants.CATEGORIAS.PROYECTOS;
        this.tarea = tarea || constants.TAREAS.CONSTRUCCION_DESARROLLO;
        this.referencia = referencia;
        this.fecha = fecha;
        this.comentario = comentario;
        this.hours = hours;
    }



}

module.exports = Hours;