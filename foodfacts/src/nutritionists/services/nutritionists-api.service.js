import http from '../../public/services/http-common.js'
export class NutritionistsApiService {
    getAll() {
        return http.get('/nutritionists')
    }

    getById(id) {
        return http.get(`nutritionists/${id}`)
    }
}