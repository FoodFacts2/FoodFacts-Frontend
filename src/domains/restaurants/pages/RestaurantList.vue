<template>
  <div class="restaurant-list">
    <h2 class="restaurant-list__title">{{ $t('message.restaurants') }}</h2>
    <input v-model="searchQuery" :placeholder="$t('Buscar')" class="restaurant-list__search" />
    <div v-if="loading" class="restaurant-list__loading">Loading...</div>
    <div v-else class="restaurant-list__grid">
      <restaurant-item v-for="restaurant in filteredRestaurants" :key="restaurant.id" :restaurant="restaurant" />
    </div>
    <div v-if="!loading && restaurants.length === 0" class="restaurant-list__empty">
      <button @click="generateSampleRestaurants">Mostrar Restaurantes</button>
    </div>
  </div>
</template>

<script>
import RestaurantItem from '../components/RestaurantItem.vue';
import restaurantService from '../services/restaurantService';
import { useToast } from 'vue-toastification';
import Restaurant from '../model/Restaurant';

export default {
  name: 'RestaurantList',
  components: {
    RestaurantItem
  },
  data() {
    return {
      restaurants: [],
      searchQuery: '',
      loading: true
    };
  },
  setup() {
    const toast = useToast();
    return { toast };
  },
  computed: {
    filteredRestaurants() {
      return this.restaurants.filter(restaurant =>
          restaurant.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  async created() {
    await this.fetchRestaurants();
  },
  methods: {
    async fetchRestaurants() {
      try {
        const response = await restaurantService.getRestaurants();
        this.restaurants = response.map(restaurant => new Restaurant(
            restaurant.id,
            restaurant.name,
            restaurant.address,
            restaurant.imageUrl
        ));
        this.toast.success('Your restaurant list has been loaded successfully.');
      } catch (error) {
        console.error('Error fetching restaurants:', error);
      } finally {
        this.loading = false;
      }
    },
    generateSampleRestaurants() {
      const sampleRestaurants = [
        new Restaurant(1, 'La Trattoria', '123 Main St, Cityville', 'https://via.placeholder.com/300'),
        new Restaurant(2, 'Sushi Express', '456 Elm St, Townsville', 'https://via.placeholder.com/300'),
        new Restaurant(3, 'Burger Palace', '789 Oak St, Villagetown', 'https://via.placeholder.com/300'),
        new Restaurant(4, 'Pizza Palace', '101 Pine St, Forestville', 'https://via.placeholder.com/300'),
        new Restaurant(5, 'Taco Town', '202 Maple St, Meadowville', 'https://via.placeholder.com/300'),
        new Restaurant(6, 'Steakhouse Deluxe', '303 Birch St, Hillside', 'https://via.placeholder.com/300'),
        new Restaurant(7, 'Seafood Haven', '404 Cedar St, Bayview', 'https://via.placeholder.com/300'),
        new Restaurant(8, 'Veggie Delight', '505 Walnut St, Greenfield', 'https://via.placeholder.com/300'),
        new Restaurant(9, 'BBQ Barn', '606 Oak St, Ranchville', 'https://via.placeholder.com/300'),
        new Restaurant(10, 'Italian Bistro', '707 Elm St, Riverside', 'https://via.placeholder.com/300'),
        new Restaurant(11, 'Sushi Bar', '808 Pine St, Lakeside', 'https://via.placeholder.com/300'),
        new Restaurant(12, 'Burger Joint', '909 Maple St, Parkville', 'https://via.placeholder.com/300'),
        new Restaurant(13, 'Pasta Paradise', '111 Birch St, Meadowbrook', 'https://via.placeholder.com/300'),
        new Restaurant(14, 'Mexican Grill', '222 Cedar St, Hillcrest', 'https://via.placeholder.com/300'),
        new Restaurant(15, 'Steak & Ale', '333 Walnut St, Baytown', 'https://via.placeholder.com/300'),
        new Restaurant(16, 'Seafood Shack', '444 Oak St, Riverdale', 'https://via.placeholder.com/300'),
        new Restaurant(17, 'Vegetarian Vibes', '555 Elm St, Greenhill', 'https://via.placeholder.com/300'),
        new Restaurant(18, 'BBQ Pit', '666 Pine St, Ranchland', 'https://via.placeholder.com/300'),
        new Restaurant(19, 'Italian Kitchen', '777 Maple St, Lakeshore', 'https://via.placeholder.com/300'),
        new Restaurant(20, 'Sushi Spot', '888 Birch St, Parkland', 'https://via.placeholder.com/300')
      ];
      this.restaurants = sampleRestaurants;
    }
  }
};
</script>

<style scoped>
.restaurant-list {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.restaurant-list__title {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

.restaurant-list__search {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1em;
}

.restaurant-list__loading {
  font-size: 18px;
  color: #777;
}

.restaurant-list__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.restaurant-list__empty {
  font-size: 18px;
  color: #777;
  text-align: center;
  margin-top: 20px;
}

.restaurant-list__empty button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 10px;
}

.restaurant-list__empty button:hover {
  background-color: #0056b3;
}
</style>