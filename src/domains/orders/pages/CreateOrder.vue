<template>
  <div class="create-order">
    <h2>{{ $t('message.createOrder') }}</h2>
    <form @submit.prevent="createOrder">
      <base-input v-model="restaurantId" type="number" :placeholder="$t('message.restaurantId')" />
      <base-input v-model="totalAmount" type="number" :placeholder="$t('message.totalAmount')" />
      <base-button type="submit">{{ $t('message.create') }}</base-button>
    </form>
  </div>
</template>

<script>
import BaseInput from '../../shared/components/BaseInput.vue'
import BaseButton from '../../shared/components/BaseButton.vue'
import orderService from '../services/orderService'

export default {
  name: 'CreateOrder',
  components: {
    BaseInput,
    BaseButton
  },
  data() {
    return {
      restaurantId: '',
      totalAmount: ''
    }
  },
  methods: {
    async createOrder() {
      try {
        await orderService.createOrder({
          restaurantId: this.restaurantId,
          totalAmount: this.totalAmount
        })
        this.$router.push('/orders')
      } catch (error) {
        console.error('Error creating order:', error)
      }
    }
  }
}
</script>

<style scoped>
.create-order {
  padding: 20px;
}
</style>