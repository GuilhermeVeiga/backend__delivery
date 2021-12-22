"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryRepositoryMemory = void 0;
class DeliveryRepositoryMemory {
    constructor() {
        this.deliverys = [];
        this.deliveryData = [
            {
                enderecoEntrega: "Rua Clodoaldo De Freitas, 382",
                statusEntrega: "Objeto Postado",
                dataEntrada: "21/12/2021"
            }
        ];
    }
    listAllDelivery() {
        const deliverysData = this.deliveryData;
        return Promise.resolve(deliverysData);
    }
    createDelivery(enderecoEntrega, statusEntrega, dataEntrada) {
        this.deliverys.push({ enderecoEntrega, statusEntrega, dataEntrada });
    }
}
exports.DeliveryRepositoryMemory = DeliveryRepositoryMemory;
