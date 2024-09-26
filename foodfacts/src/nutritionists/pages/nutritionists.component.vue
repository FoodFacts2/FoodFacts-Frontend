<template>
  <div>
    <h2>Nutritionists</h2>

    <div class="grid content">
      <div v-for="nutritionist in nutritionists" :key="nutritionist.id" class="card">
        <div class="card-content">
          <img :src="nutritionist.img" alt="Nutritionist photo" class="nutritionist-photo" />
          <h4>{{ nutritionist.name }}</h4>
          <p>{{ nutritionist.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {NutritionistsApiService} from '../services/nutritionists-api.service.js'

export default {
  name: "nutritionist-cards",
  data() {
    return {
      nutritionists: [],
      nutritionistsService: null,
    }
  },
  created() {
    this.nutritionistsService = new NutritionistsApiService();
    this.nutritionistsService.getAll().then(response => {
      this.nutritionists = response.data;
      console.log(this.nutritionists)
    })
  }
}
</script>

<style scoped>
h2 {
  font-size: 40px;
  margin-bottom: 60px;
}

h4 {
  color: #1a1a1a;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: #faebd7;
}

.nutritionist-photo {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 16px;
}

.card-content h4 {
  margin: 0 0 10px;
}

.card-content p {
  font-size: 0.875rem;
  color: #6c757d;
}

.content {
  margin-bottom: 40px;
}
</style>
