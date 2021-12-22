import { ListAllDelivery } from '../core/useCase/ListAllDelivery';
import { CreateDelivery } from '../core/useCase/CreateDelivery';
import { DeliveryRepositoryMemory } from '../infra/repository/DeliveryRepositoryMemory';

test("Should List All Delivery", async function(){
    const listAllDeliveryRepositoryMemory = new DeliveryRepositoryMemory();

    const listAllDelivery = new ListAllDelivery(listAllDeliveryRepositoryMemory);
    const allDelivery = await listAllDelivery.execute(); 
    console.log(allDelivery)
})