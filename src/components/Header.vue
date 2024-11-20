<template>
  <header class="header">
    <div class="header-content">
      <h1 class="header-title">FoodFacts</h1>
      <nav class="header-nav">
        <router-link to="/">{{ $t('message.home') }}</router-link>
        <template v-if="isAuthenticated">
          <router-link to="/profile">{{ $t('message.profile') }}</router-link>
          <router-link to="/profile/edit">{{ $t('message.editProfile') }}</router-link>
          <router-link to="/orders">{{ $t('message.orders') }}</router-link>
          <router-link to="/orders/create">{{ $t('message.createOrder') }}</router-link>
          <button @click="logout">{{ $t('message.logout') }}</button>
        </template>
        <template v-else>
          <router-link to="/subscriptions">{{ $t('message.subscriptions') }}</router-link>
          <router-link to="/restaurants">{{ $t('message.restaurants') }}</router-link>
          <router-link to="/orders">{{ $t('message.orders') }}</router-link>
          <router-link to="/register">{{ $t('message.register') }}</router-link>
          <router-link to="/login">{{ $t('message.login') }}</router-link>
        </template>
      </nav>
    </div>
    <div class="language-switcher">
      <select v-model="selectedLanguage" @change="changeLanguage" class="language-select">
        <option value="en">🇺🇸 English</option>
        <option value="es">🇵🇪 Spanish</option>
      </select>
    </div>
  </header>
</template>

<script>
import userService from './../domains/users/services/userService';
import { useI18n } from 'vue-i18n';

export default {
  name: 'Header',
  setup() {
    const { locale } = useI18n();

    const changeLanguage = (event) => {
      locale.value = event.target.value;
    };

    return {
      changeLanguage,
    };
  },
  data() {
    return {
      isAuthenticated: userService.isAuthenticated(),
      selectedLanguage: useI18n().locale.value,
    };
  },
  methods: {
    async logout() {
      await userService.logout();
      this.isAuthenticated = false;
      this.$router.push('/login');
    },
  }
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #42b983;
  color: white;
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.header-title {
  margin: 0;
}

.header-nav {
  display: flex;
  align-items: center;
}

.header-nav a,
.header-nav button {
  color: white;
  margin-left: 10px;
  text-decoration: none;
}

.header-nav button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  text-decoration: underline;
}

.language-switcher {
  display: flex;
  align-items: center;
  margin-left: 10px;
}

.language-select {
  margin-left: 5px;
  padding: 5px;
  border: none;
  border-radius: 4px;
  background-color: white;
  color: #42b983;
  font-size: 16px;
  cursor: pointer;
}
</style>