<template>
  <div class="home-page">
    <div class="grid-container">
      <div class="grid-item">
        <hero-section />
      </div>
      <div class="grid-item">
        <feature-section />
      </div>
      <div class="grid-item">
        <testimonial-section />
      </div>
    </div>
  </div>
</template>

<script>
import HeroSection from '../components/hero-section.component.vue';
import FeatureSection from '../components/feature-section.component.vue';
import TestimonialSection from '../components/testimonial-section.component.vue';

export default {
  name: 'HomePage',
  components: {
    HeroSection,
    FeatureSection,
    TestimonialSection,
  },
};
</script>

<style scoped>
.home-page {
  padding: 2rem;
  background-color: #f0f8ff; /* Color de fondo */
  min-height: 100vh; /* Altura mínima para ocupar toda la pantalla */
}

.pv-card {
  background-color: #ffffff; /* Color de fondo del card */
  border-radius: 8px; /* Bordes redondeados */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra */
}

.pv-card .p-card-title {
  color: #333333; /* Color del título */
}

.pv-card .p-card-content p {
  color: #666666; /* Color del texto */
}
</style>