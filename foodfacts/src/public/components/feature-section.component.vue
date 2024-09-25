<template>
  <div class="feature-section">
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
  </div>
</template>

<script>
export default {
  name: 'FeatureSection',
};
</script>

<style scoped>
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
</style>