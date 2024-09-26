import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../public/pages/home.page.vue';
import LoginPage from '../public/pages/login.page.vue';
import RegisterPage from '../public/pages/register.page.vue';
import DashboardPage from '../user/pages/dashboard.page.vue';
import headerComponent from "@/shared/components/header.component.vue";
import healthriskSectionComponent from "@/public/components/healthrisk-section-component.vue";
import NutritionistsComponent from "@/nutritionists/pages/nutritionists.component.vue";

const routes = [
    { path: '/', component: HomePage },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
    { path: '/dashboard', component: DashboardPage },
    { path: '/nutritionists', component: NutritionistsComponent },
    {path: '/healthrisk', component: healthriskSectionComponent },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;