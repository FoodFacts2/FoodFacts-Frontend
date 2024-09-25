<template>
  <div class="profile-page">
    <pv-card>
      <template #title>
        Profile
      </template>
      <template #content>
        <pv-input v-model="name" placeholder="Name" />
        <pv-input v-model="email" placeholder="Email" />
        <pv-button label="Update Profile" @click="updateProfile" />
      </template>
    </pv-card>
  </div>
</template>

<script>
import authService from '@/shared/services/auth.service';

export default {
  name: 'ProfilePage',
  data() {
    return {
      name: '',
      email: '',
    };
  },
  methods: {
    updateProfile() {
      const updatedProfile = {
        username: this.name,
        email: this.email,
      };
      authService.updateUserProfile(updatedProfile);
      console.log(`Updating profile with name: ${this.name} and email: ${this.email}`);
    },
  },
  created() {
    const userProfile = authService.getUserProfile();
    if (userProfile) {
      this.name = userProfile.username;
      this.email = userProfile.email;
    }
  },
};
</script>

<style scoped>
.profile-page {
  padding: 2rem;
}
</style>