import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../public/pages/home.page.vue';
import LoginPage from '../public/pages/login.page.vue';
import RegisterPage from '../public/pages/register.page.vue';
import DashboardPage from '../user/pages/dashboard.page.vue';

const routes = [
    { path: '/', component: HomePage },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
    { path: '/dashboard', component: DashboardPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;