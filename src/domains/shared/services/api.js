import axios from 'axios';

const apiClient = axios.create({
    baseURL: '/api', // Ajusta la URL base según tu configuración
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}` // Incluir token si está disponible
    }
});

export default {
    get(resource) {
        return apiClient.get(resource);
    },
    post(resource, data) {
        return apiClient.post(resource, data);
    },
    put(resource, data) {
        return apiClient.put(resource, data);
    },
    delete(resource) {
        return apiClient.delete(resource);
    }
}