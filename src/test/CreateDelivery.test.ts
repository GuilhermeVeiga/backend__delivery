import { CreateDelivery } from '../core/useCase/CreateDelivery';
import { DeliveryRepositoryMemory } from '../infra/repository/DeliveryRepositoryMemory';

test("Should Create a Delivery", async function(){
    const createDeliveryRepositoryMemory = new DeliveryRepositoryMemory();

    const createDelivery = new CreateDelivery(createDeliveryRepositoryMemory);
    const delivery = await createDelivery.execute('Rua Clodoaldo de Freitas, 382', 'Objeto Postado', '18/12/2021');
    expect(delivery.statusEntrega).toBe("Objeto Postado");
})