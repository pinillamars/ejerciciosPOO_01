class Coche {
    constructor(color, nombre, estado){
        this.color = color;
        this.nombre = nombre;
        this.estado = false;
    }
    arrancar(){
        if(this.estado === false){
            return this.estado === true;
        }else{
            return console.log("El coche ya está encendido");
        }
    }
    frenar(){
        if(this.estado === true){
            return this.estado === false;
        }else{
            return console.log("El coche ya está parado");
        }
    }
}