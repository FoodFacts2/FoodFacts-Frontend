
<template>
  <h2>Riesgos para la salud de Clif Bar</h2>
  <h3>Riesgos sanitarios a corto plazo</h3>
  <div class="feature-section">
    <pv-card class="feature-card">
      <template #title>
        Salud cardiovascular
      </template>
      <template #content>
        <img src="@/public/assets/corazon.png" alt="imagen" />
        <p>Alto contenido en azúcares añadidos y grasas saturadas, que pueden aumentar el riesgo de cardiopatías</p>
      </template>
    </pv-card>
    <pv-card class="feature-card">
      <template #title>
        Salud digestiva
      </template>
      <template #content>
        <img src="@/public/assets/corazon.png" alt="imagen" />
        <p>Alto contenido en fibra y alcoholes de azúcar, que pueden causar molestias digestivas</p>
      </template>
    </pv-card>
    <pv-card class="feature-card">
      <template #title>
        Salud mental
      </template>
      <template #content>
        <img src="@/public/assets/cerebro.png" alt="imagen"/>
        <p>Alto contenido en azúcares añadidos e ingredientes artificiales, que pueden afectar negativamente al estado de ánimo y a la función cognitiva.</p>
      </template>
    </pv-card>
  </div>

  <!--------->
  <br><br>
  <h3>Riesgos para la salud a largo plazo</h3>
  <div class="feature-section">
    <pv-card class="feature-card">
      <template #title>
        Cancer
      </template>
      <template #content>
        <img src="@/public/assets/virus.png" alt="imagen" />
        <p>Alto contenido en azúcares añadidos e ingredientes procesados,
          que pueden aumentar el riesgo de padecer ciertos tipos de cáncer</p>
      </template>
    </pv-card>
    <pv-card class="feature-card">
      <template #title>
        Salud ósea
      </template>
      <template #content>
        <img src="@/public/assets/hueso.png" alt="imagen"/>
        <p>Bajo contenido en nutrientes esenciales como el calcio y la vitamina D,
          que pueden debilitar los huesos con el tiempo.</p>
      </template>
    </pv-card>
    <pv-card class="feature-card">
      <template #title>
        Cardiopatías
      </template>
      <template #content>
        <img src="@/public/assets/corazon.png" alt="imagen" />
        <p>Alto contenido en grasas trans y sodio, que pueden contribuir a la aterosclerosis y la hipertensión</p>
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
  margin-top: 4rem;
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