import { createI18n } from 'vue-i18n'

const messages = {
    en: {
        message: {
            register: 'Register',
            login: 'Login',
            username: 'Username',
            email: 'Email',
            password: 'Password',
            restaurants: 'Restaurants',
            orders: 'Orders',
            profile: 'Profile',
            subscriptions: 'Subscriptions',
            home: 'Home',
            welcome:'Welcome to FoodFacts',
            description: 'Your ultimate guide to healthy eating and delicious meals!',
            featuredSubscriptions: 'Featured Subscriptions',
            featuredRestaurants: 'Featured Restaurants',
            editProfile: 'Edit Profile',
            save: 'Save',
            createOrder: 'Create Order',
            create: 'Create',
            restaurantId: 'Restaurant ID',
            totalAmount: 'Total Amount',
            menu: 'Menu'
        }
    },
    es: {
        message: {
            register: 'Registrarse',
            login: 'Iniciar sesión',
            username: 'Nombre de usuario',
            email: 'Correo electrónico',
            password: 'Contraseña',
            restaurants: 'Restaurantes',
            orders: 'Pedidos',
            profile: 'Perfil',
            subscriptions: 'Suscripciones',
            home: 'Inicio',
            welcome:'Bienvenido a FoodFacts',
            description: 'Tu guía definitiva para comer sano y delicioso!',
            featuredSubscriptions: 'Suscripciones Destacadas',
            featuredRestaurants: 'Restaurantes Destacados',
            editProfile: 'Editar Perfil',
            save: 'Guardar',
            createOrder: 'Crear Pedido',
            create: 'Crear',
            restaurantId: 'ID del Restaurante',
            totalAmount: 'Monto Total',
            menu: 'Menú'
        }
    }
}

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages,
})

export default i18n