<template>
  <div class="restaurant-item">
    <h3>{{ restaurant.name }}</h3>
    <p>{{ restaurant.address }}</p>
  </div>
</template>

<script>
export default {
  name: 'RestaurantItem',
  props: {
    restaurant: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.restaurant-item {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}
</style>