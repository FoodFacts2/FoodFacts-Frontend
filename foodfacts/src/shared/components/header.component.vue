<template>
  <header class="header-component">
    <h1>FoodFacts</h1>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/healthrisk">Products</router-link></li>
        <li><router-link to="/login">Login</router-link></li>
        <li><router-link to="/register">Register</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
};
</script>

<style scoped>
.header-component {
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav ul {
  list-style: none;
  padding: 0;
  display: flex;
}

nav ul li {
  margin-left: 1rem;
}

nav ul li a {
  text-decoration: none;
  color: #333;
}
</style>