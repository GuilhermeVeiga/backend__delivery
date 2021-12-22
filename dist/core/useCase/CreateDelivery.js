"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDelivery = void 0;
const Delivery_1 = require("../entity/Delivery");
class CreateDelivery {
    constructor(deliveryRepository) {
        this.deliveryRepository = deliveryRepository;
    }
    execute(enderecoEntrega, statusEntrega, dataEntrada) {
        return __awaiter(this, void 0, void 0, function* () {
            const delivery = new Delivery_1.Delivery(enderecoEntrega, statusEntrega, dataEntrada); //'Rua Clodoaldo de Freitas, 382', 'Objeto Postado', '18/12/2021');
            yield this.deliveryRepository.createDelivery(delivery.enderecoEntrega, delivery.statusEntrega, delivery.dataEntrada);
            return delivery;
        });
    }
}
exports.CreateDelivery = CreateDelivery;
