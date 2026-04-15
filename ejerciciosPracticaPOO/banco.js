class CuentaBancaria{
    #saldo;
    constructor(saldoInicial){
        this.#saldo = saldoInicial;
    }
    ingresar(cantidad){
        if (cantidad > 0){
            this.#saldo += cantidad;
        }
    }
    retirar(cantidad){
        if (cantidad > 0 && cantidad <= this.#saldo) {
            this.#saldo -= cantidad;
        }
    }
    verSaldo(){
        return this.#saldo;
    }
}