<template>
  <div class="testimonial-section">
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
  </div>
</template>

<script>
export default {
  name: 'TestimonialSection',
};
</script>

<style scoped>
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