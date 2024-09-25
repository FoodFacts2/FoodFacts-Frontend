<template>
  <div class="app-container">
    <header-component />
    <main class="p-mt-4">
      <router-view />
    </main>
    <footer-component />
  </div>
</template>

<script>
import HeaderComponent from './shared/components/header.component.vue';
import FooterComponent from './shared/components/footer.component.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style>
.app-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}

header {
  padding: 1rem 0;
}

nav ul {
  list-style: none;
  padding: 0;
}

nav ul li {
  margin-left: 1rem;
}

nav ul li a {
  text-decoration: none;
  color: #333;
}

footer {
  padding: 1rem 0;
  border-top: 1px solid #ccc;
}
</style>