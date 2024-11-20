<template>
  <div class="order-history">
    <h2 class="order-history__title">{{ $t('message.orders') }}</h2>
    <div v-if="loading" class="order-history__loading">Loading...</div>
    <div v-else class="order-history__list">
      <order-item v-for="order in orders" :key="order.id" :order="order" />
    </div>
    <div v-if="!loading && orders.length === 0" class="order-history__empty">
      <button @click="generateSampleOrders">Mostrar Órdenes</button>
    </div>
  </div>
</template>

<script>
import OrderItem from '../components/OrderItem.vue'
import orderService from '../services/orderService'
import { useToast } from 'vue-toastification'

export default {
  name: 'OrderHistory',
  components: {
    OrderItem
  },
  data() {
    return {
      orders: [],
      loading: true
    }
  },
  setup() {
    const toast = useToast()
    return { toast }
  },
  async created() {
    await this.fetchOrders()
  },
  methods: {
    async fetchOrders() {
      try {
        const response = await orderService.getOrders()
        this.orders = response.data
        this.toast.success('Your order history has been loaded successfully.')
      } catch (error) {
        console.error('Error fetching orders:', error)
      } finally {
        this.loading = false
      }
    },
    generateSampleOrders() {
      const sampleOrders = [
        { id: 1, totalAmount: 50.00, createdAt: '2023-10-01T12:34:56Z' },
        { id: 2, totalAmount: 75.50, createdAt: '2023-10-02T14:22:33Z' },
        { id: 3, totalAmount: 30.25, createdAt: '2023-10-03T09:11:22Z' },
        { id: 4, totalAmount: 100.00, createdAt: '2023-10-04T16:45:30Z' },
        { id: 5, totalAmount: 25.75, createdAt: '2023-10-05T10:00:00Z' },
        { id: 6, totalAmount: 60.00, createdAt: '2023-10-06T11:15:00Z' },
        { id: 7, totalAmount: 85.50, createdAt: '2023-10-07T13:20:00Z' },
        { id: 8, totalAmount: 40.25, createdAt: '2023-10-08T10:30:00Z' },
        { id: 9, totalAmount: 110.00, createdAt: '2023-10-09T17:00:00Z' },
        { id: 10, totalAmount: 35.75, createdAt: '2023-10-10T11:45:00Z' },
        { id: 11, totalAmount: 70.00, createdAt: '2023-10-11T12:30:00Z' },
        { id: 12, totalAmount: 95.50, createdAt: '2023-10-12T14:45:00Z' },
        { id: 13, totalAmount: 50.25, createdAt: '2023-10-13T10:15:00Z' },
        { id: 14, totalAmount: 120.00, createdAt: '2023-10-14T18:00:00Z' },
        { id: 15, totalAmount: 45.75, createdAt: '2023-10-15T12:00:00Z' },
        { id: 16, totalAmount: 80.00, createdAt: '2023-10-16T13:30:00Z' },
        { id: 17, totalAmount: 105.50, createdAt: '2023-10-17T15:00:00Z' },
        { id: 18, totalAmount: 60.25, createdAt: '2023-10-18T11:00:00Z' },
        { id: 19, totalAmount: 130.00, createdAt: '2023-10-19T19:00:00Z' },
        { id: 20, totalAmount: 55.75, createdAt: '2023-10-20T12:45:00Z' }
      ];
      this.orders = sampleOrders;
    }
  }
}
</script>

<style scoped>
.order-history {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.order-history__title {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

.order-history__loading {
  font-size: 18px;
  color: #777;
}

.order-history__list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.order-history__empty {
  font-size: 18px;
  color: #777;
  text-align: center;
  margin-top: 20px;
}

.order-history__empty button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 10px;
}

.order-history__empty button:hover {
  background-color: #0056b3;
}
</style>