<template>
  <div class="login">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <base-input v-model="email" placeholder="Email" />
      <base-input v-model="password" type="password" placeholder="Password" />
      <base-button type="submit">Login</base-button>
    </form>
  </div>
</template>

<script>
import BaseInput from '../../shared/components/BaseInput.vue'
import BaseButton from '../../shared/components/BaseButton.vue'
import userService from '../../users/services/userService'

export default {
  name: 'Login',
  components: {
    BaseInput,
    BaseButton
  },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login() {
      try {
        await userService.login({
          email: this.email,
          password: this.password
        })
        this.$router.push('/profile')
      } catch (error) {
        console.error('Error logging in:', error)
      }
    }
  }
}
</script>

<style scoped>
.login {
  padding: 20px;
}
</style>