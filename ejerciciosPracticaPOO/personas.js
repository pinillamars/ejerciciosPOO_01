class Persona{
    construct(nombre){
        this.nombre = nombre;
    }
    saludar(){
        console.log("Hola, soy " + this.nombre);
    }
}
class Profesor extends Persona{
    enseñar(){
        console.log("Está enseñando");
    }
}