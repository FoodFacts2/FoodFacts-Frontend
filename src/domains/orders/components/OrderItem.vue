<template>
  <div class="order-item">
    <h3>Order #{{ order.id }}</h3>
    <p>Total Amount: ${{ order.totalAmount }}</p>
    <p>Date: {{ order.createdAt }}</p>
  </div>
</template>

<script>
export default {
  name: 'OrderItem',
  props: {
    order: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.order-item {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}
</style>