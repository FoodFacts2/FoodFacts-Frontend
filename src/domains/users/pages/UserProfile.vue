<template>
  <div class="user-profile">
    <h2>User Profile</h2>
    <div v-if="loading">Loading...</div>
    <user-details v-else :user="user" />
  </div>
</template>

<script>
import UserDetails from '../components/UserDetails.vue';
import userService from '../services/userService';
import UserProfile from '../model/UserProfile';

export default {
  name: 'UserProfile',
  components: {
    UserDetails
  },
  data() {
    return {
      user: new UserProfile({}),
      loading: true
    };
  },
  async created() {
    await this.fetchUserProfile();
  },
  methods: {
    async fetchUserProfile() {
      try {
        const response = await userService.getUserProfile();
        this.user = response;
      } catch (error) {
        console.error('Error fetching user profile:', error);
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>