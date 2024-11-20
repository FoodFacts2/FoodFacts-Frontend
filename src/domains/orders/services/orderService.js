import api from '../../../domains/shared/services/api';
import Order from '../model/Order';

export default {
    async getOrders() {
        try {
            const response = await api.get('/orders');
            return response.data.map(order => new Order(
                order.id,
                order.totalAmount,
                order.createdAt
            ));
        } catch (error) {
            console.error('Error fetching orders:', error);
            throw error;
        }
    },
    async getOrderById(id) {
        try {
            const response = await api.get(`/orders/${id}`);
            const { id: orderId, totalAmount, createdAt } = response.data;
            return new Order(orderId, totalAmount, createdAt);
        } catch (error) {
            console.error('Error fetching order by ID:', error);
            throw error;
        }
    }
}