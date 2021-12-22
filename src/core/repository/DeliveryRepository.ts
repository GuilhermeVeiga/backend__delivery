import { Delivery } from "../entity/Delivery";

export interface DeliveryRepository{
	createDelivery(enderecoEntrega: string, statusEntrega: any, dataEntrada: any) : void;
	listAllDelivery() : Promise<Delivery>; 
}