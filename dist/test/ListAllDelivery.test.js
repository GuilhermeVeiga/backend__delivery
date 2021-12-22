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
const ListAllDelivery_1 = require("../core/useCase/ListAllDelivery");
const DeliveryRepositoryMemory_1 = require("../infra/repository/DeliveryRepositoryMemory");
test("Should List All Delivery", function () {
    return __awaiter(this, void 0, void 0, function* () {
        const listAllDeliveryRepositoryMemory = new DeliveryRepositoryMemory_1.DeliveryRepositoryMemory();
        const listAllDelivery = new ListAllDelivery_1.ListAllDelivery(listAllDeliveryRepositoryMemory);
        const allDelivery = yield listAllDelivery.execute();
        console.log(allDelivery);
        expect(allDelivery.statusEntrega).toBe("Objeto Postado");
    });
});
