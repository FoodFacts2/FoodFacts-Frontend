import apiService from '@/shared/services/api.service';

class AuthService {
    async register(userData) {
        try {
            const response = await apiService.post('/auth/register', userData);
            const userProfile = {
                id: response.data.user.id,
                username: response.data.user.email.split('@')[0], // Usar el nombre de usuario como parte del email
                email: response.data.user.email,
                alertSettings: {},
                favoriteProducts: [],
            };
            localStorage.setItem('userProfile', JSON.stringify(userProfile));
            return response.data;
        } catch (error) {
            throw new Error('Registration failed');
        }
    }

    async login(credentials) {
        try {
            const response = await apiService.post('/auth/login', credentials);
            const userProfile = {
                id: response.data.user.id,
                username: response.data.user.email.split('@')[0], // Usar el nombre de usuario como parte del email
                email: response.data.user.email,
                alertSettings: {},
                favoriteProducts: [],
            };
            localStorage.setItem('userProfile', JSON.stringify(userProfile));
            return response.data;
        } catch (error) {
            throw new Error('Login failed');
        }
    }

    logout() {
        localStorage.removeItem('userProfile');
    }

    getUserProfile() {
        const userProfile = localStorage.getItem('userProfile');
        return userProfile ? JSON.parse(userProfile) : null;
    }

    updateUserProfile(updatedProfile) {
        const userProfile = this.getUserProfile();
        const newProfile = { ...userProfile, ...updatedProfile };
        localStorage.setItem('userProfile', JSON.stringify(newProfile));
    }
}

export default new AuthService();