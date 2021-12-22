import { DeliveryRepository } from '../repository/DeliveryRepository';

export class ListAllDelivery {
    deliveryRepository: DeliveryRepository;
    constructor(deliveryRepository: DeliveryRepository){
		this.deliveryRepository = deliveryRepository;
    }

    async execute (){ 
        return this.deliveryRepository.listAllDelivery();
    }
}