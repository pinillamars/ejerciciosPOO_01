class TarjetaCredito{
    constructor(titular, saldo, limite, activa){
        this.titular = titular;
        this.saldo = saldo;
        this.limite = limite;
        this.activa = true;
    }
    activar(){
        return this.activa =  true;
    }
    desactivar(){
        return this.activa = false;
    }
    comprar(cantidad){
        if(this.activa === true && this.limite >= cantidad && this.saldo >= cantidad){
            return this.saldo -= cantidad;
        }else{
            console.log("No puedes comprar");
        }
    }
    pagar(cantidad){
        console.log("Se ha reducido la deuda por ",cantidad);
    }
    disponible(){
        return this.saldo;
    }
    estado(){
        let listado = [this.titular, this.saldo, this.limite, this.activa];
        return listado;
    }
}