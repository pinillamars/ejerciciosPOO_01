class Poligono{
    constructor(lados, longitudLado, apotema, altura){
        this.lados = lados;
        this.longitudLado = longitudLado;
        this.apotema = apotema;
        this.altura = altura;
    }
    perimetro(){
        let perimetro =this.lados>=3&&this.longitudLado>0?this.lados*this.longitudLado:console.log("No se puede calcular el perímetro");
        return perimetro;
    }
    area(){
        if (this.apotema !== null){
            
        }
    }
}