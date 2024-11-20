<template>
  <button class="base-button" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
.base-button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}
</style>