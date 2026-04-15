class Personaje{
    constructor(nombre, vida){
        this.nombre = nombre;
        this.vida = vida;
    }
    atacar(){
        console.log(`${this.nombre} + " ataca"`);
    }
    recibirDaño(cantidad){
        if(this.vida>=cantidad){
            return this.vida -= cantidad;
        }
    }
    estaVivo(){
        if(this.vida>=1){
            return true;
        }else{
            return false;
        }
    }
}
class Guerrero extends Personaje{
    constructor(nombre, vida, stamina){
        super(nombre, vida);
        this.stamina = stamina;
    }
    ataqueEspecial(){
        if(this.stamina>=10){
            console.log(`${this.nombre}+" usa su ataque especial"`);
            return this.stamina -= 10;
        }else{
            console.log(`${this.nombre}+ " no puede usar su ataque especial"`);
        }
    }
}
class Mago extends Personaje{
    constructor(nombre, vida, mana){
        super(nombre, vida);
        this.mana = mana;
    }
    lanzarHechizo(){
        if(this.mana>=10){
            console.log(`${this.nombre}+" usa un hechizo"`);
            return this.mana -= 10;
        }else{
            console.log(`${this.nombre}+ " no puede usar magia"`);
        }
    }
}