<template>
  <div class="login-page">
    <div class="login-container">
      <pv-card class="login-card">
        <template #title>
          <h1>{{ $t('loginTitle') }}</h1>
        </template>
        <template #content>
          <pv-input v-model="email" placeholder="Email" class="login-input" />
          <pv-input v-model="password" type="password" placeholder="Password" class="login-input" />
          <pv-button label="Acceder" @click="login" class="login-button" />
          <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
          <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
          <div class="social-login">
            <a href="https://accounts.google.com/signin" target="_blank" class="social-button">
              <img src="@/public/assets/google.png" alt="Google" class="social-logo" />
            </a>
            <a href="https://www.facebook.com/login" target="_blank" class="social-button">
              <img src="@/public/assets/facebook.png" alt="Facebook" class="social-logo" />
            </a>
            <a href="https://appleid.apple.com/sign-in" target="_blank" class="social-button">
              <img src="@/public/assets/apple.png" alt="Apple" class="social-logo" />
            </a>
          </div>
        </template>
      </pv-card>
    </div>
  </div>
</template>

<script>
import authService from '@/shared/services/auth.service';

export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
      errorMessage: '',
      successMessage: '',
    };
  },
  methods: {
    async login() {
      this.errorMessage = '';
      this.successMessage = '';

      try {
        const response = await authService.login({ email: this.email, password: this.password });
        console.log(response);
        this.successMessage = 'Login successful! Redirecting...';
        setTimeout(() => {
          this.$router.push('/dashboard');
        }, 2000); // Redirige después de 2 segundos
      } catch (error) {
        console.error(error);
        this.errorMessage = 'Invalid credentials. Please try again.';
      }
    },
  },
};
</script>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f8ff; /* Color de fondo */
}

.login-container {
  width: 100%;
  max-width: 400px;
}

.login-card {
  background-color: #ffffff; /* Color de fondo del card */
  border-radius: 8px; /* Bordes redondeados */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra */
  padding: 2rem;
}

.login-card .p-card-title h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333333; /* Color del título */
}

.login-input {
  margin-bottom: 1rem;
}

.login-button {
  background-color: #0078d4; /* Color del botón */
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  cursor: pointer;
  color: white; /* Color del texto del botón */
  width: 100%;
}

.login-button:hover {
  background-color: #005a9e; /* Color del botón al pasar el mouse */
}

.error-message {
  color: red;
  margin-top: 1rem;
}

.success-message {
  color: green;
  margin-top: 1rem;
}

.social-login {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}

.social-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  text-decoration: none;
}

.social-logo {
  width: 40px;
  height: 40px;
}
</style>