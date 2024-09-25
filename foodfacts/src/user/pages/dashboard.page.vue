<template>
  <div class="dashboard-page">
    <h1>Dashboard</h1>
    <div v-if="userProfile">
      <h2>{{ userProfile.username }}</h2>
      <p>{{ userProfile.email }}</p>
      <product-list :products="products" @viewDetails="viewDetails" />
      <alert-settings :settings="userProfile.alertSettings" @updateSettings="updateSettings" />
      <favorite-products :favorites="userProfile.favoriteProducts" @updateFavorites="updateFavorites" />
    </div>
    <div v-else>
      <p>No se encontró ningún perfil de usuario. Por favor inicia sesión.</p>
    </div>
  </div>
</template>

<script>
import authService from '@/shared/services/auth.service';
import productService from '@/user/services/product.service';
import ProductList from '../components/product-list.component.vue';
import AlertSettings from '../components/alert-settings.component.vue';
import FavoriteProducts from '../components/favorite-products.component.vue';

export default {
  name: 'DashboardPage',
  components: {
    ProductList,
    AlertSettings,
    FavoriteProducts,
  },
  data() {
    return {
      userProfile: null,
      products: [],
    };
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await productService.getAllProducts();
        this.products = response.data;
      } catch (error) {
        console.error('Error al recuperar productos:', error);
      }
    },
    viewDetails(productId) {
      console.log(`Ver detalles del producto ${productId}`);
    },
    updateSettings(newSettings) {
      authService.updateUserProfile({ alertSettings: newSettings });
      this.userProfile = authService.getUserProfile();
    },
    updateFavorites(newFavorites) {
      authService.updateUserProfile({ favoriteProducts: newFavorites });
      this.userProfile = authService.getUserProfile();
    },
  },
  created() {
    this.userProfile = authService.getUserProfile();
    this.fetchProducts();
  },
};
</script>

<style scoped>
.dashboard-page {
  padding: 2rem;
}
</style>