<template>
  <div class="subscription-item">
    <h3>{{ subscription.name }}</h3>
    <p>{{ subscription.description }}</p>
    <p>Price: ${{ subscription.price }}</p>
  </div>
</template>

<script>
export default {
  name: 'SubscriptionItem',
  props: {
    subscription: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.subscription-item {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}
</style>