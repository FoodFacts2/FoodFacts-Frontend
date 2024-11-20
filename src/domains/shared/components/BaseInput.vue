<template>
  <input class="base-input" :value="modelValue" @input="updateValue" />
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    modelValue: {
      type: String,
      default: ''
    }
  },
  methods: {
    updateValue(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
.base-input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>