import api from '../../../domains/shared/services/api';
import Restaurant from '../model/Restaurant';

function mapRestaurants(data) {
    return data.map(restaurant => new Restaurant(
        restaurant.id,
        restaurant.name,
        restaurant.address,
        restaurant.imageUrl
    ));
}

export default {
    async getRestaurants() {
        try {
            const response = await api.get('/restaurants');
            return mapRestaurants(response.data);
        } catch (error) {
            console.error('Error fetching restaurants:', error);
            throw error;
        }
    },
    async getFeaturedRestaurants() {
        try {
            const response = await api.get('/restaurants/featured');
            return mapRestaurants(response.data);
        } catch (error) {
            console.error('Error fetching featured restaurants:', error);
            throw error;
        }
    }
}