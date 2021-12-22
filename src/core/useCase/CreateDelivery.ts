import { Delivery } from '../entity/Delivery'
import { DeliveryRepository } from '../repository/DeliveryRepository';

export class CreateDelivery {
    deliveryRepository: DeliveryRepository;
    constructor(deliveryRepository: DeliveryRepository){
		this.deliveryRepository = deliveryRepository;
    }

    async execute (enderecoEntrega: string, statusEntrega: any, dataEntrada: any){
        const delivery = new Delivery(enderecoEntrega, statusEntrega, dataEntrada);//'Rua Clodoaldo de Freitas, 382', 'Objeto Postado', '18/12/2021');
		await this.deliveryRepository.createDelivery(delivery.enderecoEntrega, delivery.statusEntrega, delivery.dataEntrada);
        return delivery;
    }
}