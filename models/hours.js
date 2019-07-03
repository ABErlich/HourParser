class Hours {
    constructor(fecha, hours, referencia, comentario, tarea, analitica, categoria){
        this.analitica = analitica || "43"; // Techint MOA
        this.categoria = categoria || "5";  // Proyectos
        this.tarea = tarea || "21"; // Construccion-Desarrollo
        this.referencia = referencia; // Nombre del proyecto
        this.fecha = fecha;
        this.comentario = comentario;
        this.hours = hours;
    }



}

module.exports = Hours;