<template>
  <div class="user-details">
    <h3>{{ user.username }}</h3>
    <p>Email: {{ user.email }}</p>
    <p>Height: {{ user.height }}</p>
    <p>Weight: {{ user.weight }}</p>
    <p>Goal: {{ user.goal }}</p>
  </div>
</template>

<script>
export default {
  name: 'UserDetails',
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.user-details {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}
</style>