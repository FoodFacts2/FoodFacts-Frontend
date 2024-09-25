import axios from 'axios';

const API_URL = 'http://localhost:3000/api/users';

class UserService {
    // Obtener todos los usuarios
    getAllUsers() {
        return axios.get(`${API_URL}`);
    }

    // Obtener un usuario por ID
    getUserById(userId) {
        return axios.get(`${API_URL}/${userId}`);
    }

    // Crear un nuevo usuario
    createUser(userData) {
        return axios.post(`${API_URL}`, userData);
    }

    // Actualizar un usuario
    updateUser(userId, userData) {
        return axios.put(`${API_URL}/${userId}`, userData);
    }

    // Eliminar un usuario
    deleteUser(userId) {
        return axios.delete(`${API_URL}/${userId}`);
    }
}

export default new UserService();