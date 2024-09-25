<template>
  <div class="hero-section" role="region" aria-labelledby="hero-title">
    <div class="hero-background">
      <pv-card class="hero-card">
        <template #title>
          <h1 id="hero-title">{{ $t('heroTitle') }}</h1>
        </template>
        <template #content>
          <p>{{ $t('heroSubtitle') }}</p>
          <pv-button label="Descargar" aria-label="Descargar nuestra aplicación" class="hero-button" @click="downloadApp" />
        </template>
      </pv-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroSection',
  methods: {
    downloadApp() {
      const appStoreUrl = 'https://www.apple.com/la/app-store/';
      const playStoreUrl = 'https://play.google.com/store/games?hl=es_419';

      const userAgent = navigator.userAgent || navigator.vendor || window.opera;

      if (/android/i.test(userAgent)) {
        window.location.href = playStoreUrl;
      } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        window.location.href = appStoreUrl;
      } else {
        window.location.href = 'https://neon-trifle-2e0392.netlify.app/';
      }
    },
  },
};
</script>

<style scoped>
.hero-section {
  padding: 2rem;
  text-align: center;
}

.hero-background {
  background-image: url(https://i.postimg.cc/ryfyH4jn/hero-background.jpg); /* Ruta de la imagen de fondo */
  background-size: cover;
  background-position: center;
  padding: 4rem 2rem;
  color: white;
}

.hero-card {
  background-color: rgba(0, 0, 0, 0.7); /* Fondo oscuro semi-transparente */
  border-radius: 8px; /* Bordes redondeados */
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
}

.hero-card .p-card-title h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: white; /* Color del título */
}

.hero-card .p-card-content p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: white; /* Color del texto */
}

.hero-button {
  background-color: #0078d4; /* Color del botón */
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  cursor: pointer;
  color: white; /* Color del texto del botón */
}

.hero-button:hover {
  background-color: #005a9e; /* Color del botón al pasar el mouse */
}
</style>