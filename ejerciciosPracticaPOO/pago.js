class MetodoPago{
    pagar(cantidad){
        throw new Error("Método sin implementar");
    }
}
class PagoTarjeta extends MetodoPago{
    pagar(cantidad){
        console.log("Pagando " + cantidad + " con tarjeta");
    }
}
class PagoPaypal extends MetodoPago{
    pagar(cantidad){
        console.log("Pagando " + cantidad + " con Paypal");
    }
}
function procesoPago(metodoPago){
    metodoPago.pagar(100);
}
procesoPago(new PagoPaypal());
procesoPago(new PagoTarjeta());