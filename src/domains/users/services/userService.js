import api from '../../../domains/shared/services/api';

export default {
    async login(credentials) {
        try {
            const response = await api.post('/auth/login', credentials);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('isAuthenticated', 'true'); // Convertir a cadena
            return response.data;
        } catch (error) {
            console.error('Error during login:', error);
            throw error;
        }
    },
    async register(userData) {
        try {
            const response = await api.post('/users/register', userData); // Ajusta la ruta
            return response.data;
        } catch (error) {
            console.error('Error during registration:', error);
            throw error;
        }
    },
    async logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('isAuthenticated');
    },
    isAuthenticated() {
        return localStorage.getItem('isAuthenticated') === 'true'; // Comparar con cadena
    }
}