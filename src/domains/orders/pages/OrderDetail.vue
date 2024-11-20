<template>
  <div class="order-detail">
    <h2>Order Detail</h2>
    <div v-if="order">
      <h3>Order #{{ order.id }}</h3>
      <p>Total Amount: ${{ order.totalAmount }}</p>
      <p>Date: {{ order.createdAt }}</p>
      <h4>Items:</h4>
      <ul>
        <li v-for="item in order.items" :key="item.id">
          {{ item.name }} - ${{ item.price }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import orderService from '../services/orderService'

export default {
  name: 'OrderDetail',
  data() {
    return {
      order: null
    }
  },
  created() {
    this.fetchOrderDetail()
  },
  methods: {
    async fetchOrderDetail() {
      try {
        const response = await orderService.getOrderDetail(this.$route.params.id)
        this.order = response.data
      } catch (error) {
        console.error('Error fetching order detail:', error)
      }
    }
  }
}
</script>

<style scoped>
.order-detail {
  padding: 20px;
}
</style>