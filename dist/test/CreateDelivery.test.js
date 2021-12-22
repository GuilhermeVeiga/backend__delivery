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
const CreateDelivery_1 = require("../core/useCase/CreateDelivery");
const DeliveryRepositoryMemory_1 = require("../infra/repository/DeliveryRepositoryMemory");
test("Should Create a Delivery", function () {
    return __awaiter(this, void 0, void 0, function* () {
        const createDeliveryRepositoryMemory = new DeliveryRepositoryMemory_1.DeliveryRepositoryMemory();
        const createDelivery = new CreateDelivery_1.CreateDelivery(createDeliveryRepositoryMemory);
        const delivery = yield createDelivery.execute('Rua Clodoaldo de Freitas, 382', 'Objeto Postado', '18/12/2021');
        expect(delivery.statusEntrega).toBe("Objeto Postado");
    });
});
