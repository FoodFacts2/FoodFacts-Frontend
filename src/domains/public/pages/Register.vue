<template>
  <div class="register">
    <h2>Register</h2>
    <form @submit.prevent="register">
      <base-input v-model="username" placeholder="Username" />
      <base-input v-model="email" placeholder="Email" />
      <base-input v-model="password" type="password" placeholder="Password" />
      <base-button type="submit">Register</base-button>
    </form>
  </div>
</template>

<script>
import BaseInput from '../../shared/components/BaseInput.vue'
import BaseButton from '../../shared/components/BaseButton.vue'
import userService from '../../users/services/userService'

export default {
  name: 'Register',
  components: {
    BaseInput,
    BaseButton
  },
  data() {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    async register() {
      try {
        await userService.register({
          username: this.username,
          email: this.email,
          password: this.password
        });
        await this.$router.push('/login'); // Usar await aquí
      } catch (error) {
        console.error('Error registering user:', error);
      }
    }
  }
}
</script>

<style scoped>
.register {
  padding: 20px;
}
</style>