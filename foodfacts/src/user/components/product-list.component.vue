<template>
  <div class="product-list-component">
    <pv-card v-for="product in products" :key="product.id">
      <template #title>
        {{ product.name }}
      </template>
      <template #content>
        <p>{{ product.description }}</p>
        <pv-button label="View Details" @click="viewDetails(product.id)" />
      </template>
    </pv-card>
  </div>
</template>

<script>
export default {
  name: 'ProductListComponent',
  data() {
    return {
      products: [
        { id: 1, name: 'Product 1', description: 'Description of product 1' },
        { id: 2, name: 'Product 2', description: 'Description of product 2' },
        { id: 3, name: 'Product 3', description: 'Description of product 3' },
        { id: 4, name: 'Product 4', description: 'Description of product 4' },
        { id: 5, name: 'Product 5', description: 'Description of product 5' },
      ],
    };
  },
  methods: {
    viewDetails(productId) {
      console.log(`View details of product ${productId}`);
    },
  },
};
</script>

<style scoped>
.product-list-component {
  padding: 2rem;
}
</style>