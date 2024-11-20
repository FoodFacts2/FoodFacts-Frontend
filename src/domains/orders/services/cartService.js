import api from '../../../domains/shared/services/api'

export default {
    async getCartItems() {
        return api.get('/cart')
    },
    async addToCart(itemId) {
        return api.post('/cart/add', { itemId })
    },
    async removeFromCart(itemId) {
        return api.post('/cart/remove', { itemId })
    },
    async checkout() {
        return api.post('/cart/checkout')
    }
}