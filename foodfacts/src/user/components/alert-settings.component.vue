<template>
  <div class="alert-settings-component">
    <pv-card>
      <template #title>
        Alert Settings
      </template>
      <template #content>
        <pv-input v-model="alertFrequency" placeholder="Alert Frequency" />
        <pv-button label="Save Settings" @click="saveSettings" />
      </template>
    </pv-card>
  </div>
</template>

<script>
export default {
  name: 'AlertSettingsComponent',
  props: {
    settings: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      alertFrequency: this.settings.alertFrequency || '',
    };
  },
  methods: {
    saveSettings() {
      this.$emit('updateSettings', { alertFrequency: this.alertFrequency });
    },
  },
};
</script>

<style scoped>
.alert-settings-component {
  padding: 2rem;
}
</style>