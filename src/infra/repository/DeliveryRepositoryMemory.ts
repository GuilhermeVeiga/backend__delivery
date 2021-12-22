import { Delivery } from "../../core/entity/Delivery";
import { DeliveryRepository } from "../../core/repository/DeliveryRepository"; 

export class DeliveryRepositoryMemory implements DeliveryRepository{
    deliverys = [] as  any;
   
	deliveryData = [
		{ 
			enderecoEntrega: "Rua Clodoaldo De Freitas, 382", 
			statusEntrega: "Objeto Postado", 
			dataEntrada: "21/12/2021"
		}
	] as any;

    listAllDelivery(): Promise<Delivery> {
		const deliverysData = this.deliveryData;
		return Promise.resolve(deliverysData);
	}

    createDelivery(enderecoEntrega: string, statusEntrega: any, dataEntrada: any) : void{ 
        this.deliverys.push({enderecoEntrega, statusEntrega, dataEntrada})
    } 
}