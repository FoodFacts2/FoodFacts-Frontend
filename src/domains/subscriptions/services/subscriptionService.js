import api from '../../../domains/shared/services/api';
import Subscription from '../model/Subscription';

export default {
    async getSubscriptions() {
        const response = await api.get('/subscriptions');
        return response.data.map(subscription => new Subscription(
            subscription.id,
            subscription.name,
            subscription.description,
            subscription.price,
            subscription.imageUrl
        ));
    },
    async getFeaturedSubscriptions() {
        const response = await api.get('/subscriptions/featured');
        return response.data.map(subscription => new Subscription(
            subscription.id,
            subscription.name,
            subscription.description,
            subscription.price,
            subscription.imageUrl
        ));
    }
}