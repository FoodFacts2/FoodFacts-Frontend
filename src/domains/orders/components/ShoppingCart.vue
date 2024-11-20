<template>
  <div class="shopping-cart">
    <h2>{{ $t('message.shoppingCart') }}</h2>
    <ul>
      <li v-for="item in cartItems" :key="item.id">
        {{ item.name }} - ${{ item.price }}
        <button @click="removeFromCart(item.id)">{{ $t('message.remove') }}</button>
      </li>
    </ul>
    <button @click="checkout">{{ $t('message.checkout') }}</button>
  </div>
</template>

<script>
import cartService from '../services/cartService'

export default {
  name: 'ShoppingCart',
  data() {
    return {
      cartItems: []
    }
  },
  created() {
    this.fetchCartItems()
  },
  methods: {
    async fetchCartItems() {
      try {
        const response = await cartService.getCartItems()
        this.cartItems = response.data
      } catch (error) {
        console.error('Error fetching cart items:', error)
      }
    },
    async removeFromCart(itemId) {
      try {
        await cartService.removeFromCart(itemId)
        this.fetchCartItems()
      } catch (error) {
        console.error('Error removing item from cart:', error)
      }
    },
    async checkout() {
      try {
        await cartService.checkout()
        this.$router.push('/orders')
      } catch (error) {
        console.error('Error during checkout:', error)
      }
    }
  }
}
</script>

<style scoped>
.shopping-cart {
  padding: 20px;
}
</style>