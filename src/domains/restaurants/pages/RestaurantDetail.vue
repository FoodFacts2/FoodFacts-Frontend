<template>
  <div class="restaurant-detail">
    <h2>{{ restaurant.name }}</h2>
    <img :src="restaurant.imageUrl" alt="Restaurant Image" class="restaurant-image" />
    <p>{{ restaurant.address }}</p>
    <h3>{{ $t('message.menu') }}</h3>
    <ul>
      <li v-for="item in restaurant.menu" :key="item.id">
        {{ item.name }} - ${{ item.price }}
      </li>
    </ul>
  </div>
</template>

<script>
import restaurantService from '../services/restaurantService'

export default {
  name: 'RestaurantDetail',
  data() {
    return {
      restaurant: {}
    }
  },
  created() {
    this.fetchRestaurantDetail()
  },
  methods: {
    async fetchRestaurantDetail() {
      try {
        const response = await restaurantService.getRestaurantDetail(this.$route.params.id)
        this.restaurant = response.data
      } catch (error) {
        console.error('Error fetching restaurant detail:', error)
      }
    }
  }
}
</script>

<style scoped>
.restaurant-detail {
  padding: 20px;
}

.restaurant-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  margin-bottom: 20px;
}
</style>