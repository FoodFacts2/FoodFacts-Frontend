import { createRouter, createWebHistory } from 'vue-router';
import Home from '../domains/public/pages/Home.vue';
import Login from '../domains/public/pages/Login.vue';
import Register from '../domains/public/pages/Register.vue';
import Profile from '../domains/users/pages/UserProfile.vue';
import EditProfile from '../domains/users/pages/EditProfile.vue';
import Subscriptions from '../domains/subscriptions/pages/SubscriptionList.vue';
import CreateOrder from '../domains/orders/pages/CreateOrder.vue';
import Orders from '../domains/orders/pages/OrderHistory.vue';
import Restaurants from '../domains/restaurants/pages/RestaurantList.vue';
import userService from '../domains/users/services/userService';

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/profile', component: Profile, meta: { requiresAuth: true } },
    { path: '/edit-profile', component: EditProfile, meta: { requiresAuth: true } },
    { path: '/subscriptions', component: Subscriptions, },
    { path: '/create-order', component: CreateOrder, },
    { path: '/orders', component: Orders },
    { path: '/restaurants', component: Restaurants },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const isAuthenticated = userService.isAuthenticated();
    if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
        next('/login');
    } else {
        next();
    }
});

export default router;