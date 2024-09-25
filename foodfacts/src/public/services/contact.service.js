import apiService from '../../shared/services/api.service';

export default {
    sendMessage(messageData) {
        return apiService.post('/contact', messageData);
    },
};