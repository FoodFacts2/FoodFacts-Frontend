<template>
  <div class="edit-profile">
    <h2>{{ $t('message.editProfile') }}</h2>
    <form @submit.prevent="updateProfile">
      <base-input v-model="username" :placeholder="$t('message.username')" />
      <base-input v-model="email" :placeholder="$t('message.email')" />
      <base-input v-model="height" type="number" :placeholder="$t('message.height')" />
      <base-input v-model="weight" type="number" :placeholder="$t('message.weight')" />
      <base-input v-model="goal" :placeholder="$t('message.goal')" />
      <base-button type="submit">{{ $t('message.save') }}</base-button>
    </form>
  </div>
</template>

<script>
import BaseInput from '../../shared/components/BaseInput.vue'
import BaseButton from '../../shared/components/BaseButton.vue'
import userService from '../services/userService'

export default {
  name: 'EditProfile',
  components: {
    BaseInput,
    BaseButton
  },
  data() {
    return {
      username: '',
      email: '',
      height: '',
      weight: '',
      goal: ''
    }
  },
  created() {
    this.fetchUserProfile()
  },
  methods: {
    async fetchUserProfile() {
      try {
        const response = await userService.getUserProfile()
        const user = response.data
        this.username = user.username
        this.email = user.email
        this.height = user.height
        this.weight = user.weight
        this.goal = user.goal
      } catch (error) {
        console.error('Error fetching user profile:', error)
      }
    },
    async updateProfile() {
      try {
        await userService.updateUserProfile({
          username: this.username,
          email: this.email,
          height: this.height,
          weight: this.weight,
          goal: this.goal
        })
        this.$router.push('/profile')
      } catch (error) {
        console.error('Error updating user profile:', error)
      }
    }
  }
}
</script>

<style scoped>
.edit-profile {
  padding: 20px;
}
</style>