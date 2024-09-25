<template>
  <div class="favorite-products-component">
    <pv-card v-for="product in favoriteProducts" :key="product.id">
      <template #title>
        {{ product.name }}
      </template>
      <template #content>
        <p>{{ product.description }}</p>
        <pv-button label="Remove" @click="removeProduct(product.id)" />
      </template>
    </pv-card>
  </div>
</template>

<script>
export default {
  name: 'FavoriteProductsComponent',
  data() {
    return {
      favoriteProducts: [
        { id: 1, name: 'Favorite Product 1', description: 'Description of favorite product 1' },
        { id: 2, name: 'Favorite Product 2', description: 'Description of favorite product 2' },
      ],
    };
  },
  methods: {
    removeProduct(productId) {
      console.log(`Removing product ${productId} from favorites`);
    },
  },
};
</script>

<style scoped>
.favorite-products-component {
  padding: 2rem;
}
</style>