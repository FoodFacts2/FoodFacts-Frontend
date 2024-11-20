<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero-section" role="region" aria-labelledby="hero-title">
      <div class="hero-background">
        <pv-card class="hero-card">
          <template #title>
            <h1 id="hero-title">{{ $t('message.welcome') }}</h1>
          </template>
          <template #content>
            <p>{{ $t('message.description') }}</p>
            <button aria-label="Descargar nuestra aplicación" class="hero-button" @click="downloadApp">Descargar</button>
          </template>
        </pv-card>
      </div>
    </section>

    <!-- Feature Section -->
    <section class="feature-section">
      <pv-card class="feature-card">
        <template #title>
          Valores nutricionales reales
        </template>
        <template #content>
          <p>Accede a información nutricional exhaustiva sobre alimentos procesados.</p>
        </template>
      </pv-card>
      <pv-card class="feature-card">
        <template #title>
          Identificación de riesgos para la salud
        </template>
        <template #content>
          <p>Recibe recomendaciones adaptadas a tus necesidades alimenticias específicas.</p>
        </template>
      </pv-card>
      <pv-card class="feature-card">
        <template #title>
          Informes personalizados
        </template>
        <template #content>
          <p>Genera reportes que muestran posibles daños a la salud a largo plazo.</p>
        </template>
      </pv-card>
    </section>

    <!-- Testimonial Section -->
    <section class="testimonial-section">
      <pv-card class="testimonial-card">
        <template #title>
          Testimonio 1
        </template>
        <template #content>
          <p>"¡Increíble cómo una aplicación puede hacer que comer sano sea tan fácil y accesible!"</p>
          <p class="testimonial-author">- Carolina R.</p>
        </template>
      </pv-card>
      <pv-card class="testimonial-card">
        <template #title>
          Testimonio 2
        </template>
        <template #content>
          <p>"¡Esta aplicación me ha ayudado a tomar decisiones más saludables con solo mirar las etiquetas de los productos!"</p>
          <p class="testimonial-author">- Luis M.</p>
        </template>
      </pv-card>
      <pv-card class="testimonial-card">
        <template #title>
          Testimonio 3
        </template>
        <template #content>
          <p>"Gracias a esta app, ahora sé qué ingredientes evitar para mejorar mi salud."</p>
          <p class="testimonial-author">- Ana P.</p>
        </template>
      </pv-card>
    </section>
  </div>
</template>

<script>
import Card from 'primevue/card';

export default {
  name: 'Home',
  components: {
    'pv-card': Card
  },
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
    }
  }
};
</script>

<style scoped>
.home {
  padding: 20px;
}

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

.feature-section {
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
}

.feature-card {
  background-color: #ffffff; /* Color de fondo del card */
  border-radius: 8px; /* Bordes redondeados */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra */
  padding: 1rem;
  width: 30%;
  text-align: center;
}

.feature-card .p-card-title {
  color: #333333; /* Color del título */
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.feature-card .p-card-content p {
  color: #666666; /* Color del texto */
  font-size: 1rem;
}

.testimonial-section {
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
}

.testimonial-card {
  background-color: #ffffff; /* Color de fondo del card */
  border-radius: 8px; /* Bordes redondeados */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra */
  padding: 1rem;
  width: 30%;
  text-align: center;
}

.testimonial-card .p-card-title {
  color: #333333; /* Color del título */
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.testimonial-card .p-card-content p {
  color: #666666; /* Color del texto */
  font-size: 1rem;
}

.testimonial-author {
  font-style: italic;
  color: #888888;
  margin-top: 1rem;
}
</style>