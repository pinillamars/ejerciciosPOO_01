class Alumno{
    constructor(nombre, nota){
        this.nombre = nombre;
        this.nota = nota;
    }
    mostrarNota(){
        console.log(this.nombre + " tiene un " + this.nota);
    }
}