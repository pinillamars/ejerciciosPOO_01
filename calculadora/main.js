class Calculadora {
    constructor(inputDisplay, smallDisplay) {
        this.inputDisplay = inputDisplay;
        this.smallDisplay = smallDisplay;
        this.clear();
    }
    clear(){
        this.valor = "";
        this.operacion = null;
        this.valorAnterior = "";
        this.smallDisplay.textContent = "";
        this.updateDisplay();
    }
    añadirNumero(num){
        if (num === "," && this.valor.includes(".")) return;
        if (num === ",") num = ".";
        this.valor += num;
        this.updateDisplay();
    }
    operaciones(op){
        if(this.valor === "") return;
        if(this.valorAnterior !== ""){
            this.compute();
        }
        this.operacion = op;
        this.valorAnterior = this.valor;
        this.smallDisplay.textContent = `${this.valorAnterior} ${this.operacion}`;
        this.valor = "";
    }
    compute(){
        let resultado;
        const previo = parseFloat(this.valorAnterior);
        const actual = parseFloat(this.valor);
        if (isNaN(previo) || isNaN(actual)) return;
        if (this.operacion === "+") resultado = previo + actual;
        if (this.operacion === "-") resultado = previo - actual;
        if (this.operacion === "X") resultado = previo * actual;
        if (this.operacion === "÷") resultado = previo / actual;
        this.smallDisplay.textContent = `${this.valorAnterior} ${this.operacion} ${this.valor} =`;
        this.valor = resultado.toString();
        this.operacion = null;
        this.valorAnterior = "";
        this.updateDisplay();
    }
    operacionesEspeciales(op) {
        let value = parseFloat(this.valor);
        if(op === "C"){
            this.clear();
            return;
        }
        if(op === "+/-") this.valor = (value * -1).toString();
        if(op === "%") this.valor = (value / 100).toString();
        if(op === "x^2") this.valor = (value ** 2).toString();
        if(op === "x^3") this.valor = (value ** 3).toString();
        if(op === "PI") this.valor = Math.PI.toString();
        if(op === "√") this.valor = Math.sqrt(value).toString();
        this.updateDisplay();
    }
    updateDisplay(){
        let value = this.valor.toString();
        if(value.length > 9){
            const num = parseFloat(value);
            this.inputDisplay.value = num.toExponential(3);
        }else{
            this.inputDisplay.value = value;
        }
    }
}
const display = document.querySelector(".inputStyle");
const smallDisplay = document.querySelector(".small-display");
const calculadora = new Calculadora(display, smallDisplay);
document.querySelectorAll("button").forEach(btn => {
    const value = btn.textContent;
    if(!isNaN(value)){
        btn.addEventListener("click", () => calculadora.añadirNumero(value));
    }
    if(value === ","){
        btn.addEventListener("click", () => calculadora.añadirNumero(value));
    }
    if(value === "+" || value === "-" || value === "X" || value === "÷"){
        btn.addEventListener("click", () => calculadora.operaciones(value));
    }
    if(value === "="){
        btn.addEventListener("click", () => calculadora.compute());
    }
    if(value === "C" || value === "+/-" || value === "%" || value === "x^2" || value === "x^3" || value === "PI" || value === "√"){
        btn.addEventListener("click", () => calculadora.operacionesEspeciales(value));
    }
});
