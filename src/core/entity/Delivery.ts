export class Delivery {
    enderecoEntrega: string;
    statusEntrega: any;
    dataEntrada: any;

    constructor(enderecoEntrega: string, statusEntrega: any, dataEntrada: any ){
        this.enderecoEntrega = enderecoEntrega;
        this.statusEntrega = statusEntrega;
        this.dataEntrada = dataEntrada;
    }
}