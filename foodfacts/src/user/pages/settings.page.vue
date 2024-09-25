<template>
  <div class="settings-page">
    <h1>Settings</h1>
    <alert-settings :settings="alertSettings" @updateSettings="updateSettings" />
  </div>
</template>

<script>
import AlertSettings from '../components/alert-settings.component.vue';
import authService from '@/shared/services/auth.service';

export default {
  name: 'SettingsPage',
  components: {
    AlertSettings,
  },
  data() {
    return {
      alertSettings: {},
    };
  },
  methods: {
    updateSettings(newSettings) {
      authService.updateUserProfile({ alertSettings: newSettings });
      this.alertSettings = newSettings;
    },
  },
  created() {
    const userProfile = authService.getUserProfile();
    if (userProfile) {
      this.alertSettings = userProfile.alertSettings;
    }
  },
};
</script>

<style scoped>
.settings-page {
  padding: 2rem;
}
</style>