class Coche {
    constructor(marca, modelo){
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = 0;
        this.encendido = false;
    }
    encender(){
        this.encendido = true;
    }
    apagar(){
        this.encendido = false;
        this.velocidad = 0;
    }
    acelerar(cantidad){
        if(this.encendido === true && cantidad > 0){
            this.velocidad += cantidad;
        }else if(this.encendido === true && cantidad <=0){
            console.log("No es una velocidad válida");
        }
    }
    frenar(cantidad){
        if(this.velocidad !== 0 && cantidad <= this.velocidad){
        return this.velocidad -= cantidad;
        }else if(this.velocidad !== 0 && cantidad > this.velocidad){
            return this.velocidad = 0;
        }else{
            return this.velocidad;
        }
    }
    estado(){
        const listado = [this.marca, this.modelo, this.velocidad, this.encendido];
        return listado;
    }
}
const coche = new Coche("Lexus", "UX");
console.log(coche.estado());