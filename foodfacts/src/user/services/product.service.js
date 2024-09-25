import apiService from '@/shared/services/api.service';

class ProductService {
    async getAllProducts() {
        try {
            const response = await apiService.get('/products');
            return response.data;
        } catch (error) {
            throw new Error('Error fetching products');
        }
    }

    async getProductById(productId) {
        try {
            const response = await apiService.get(`/products/${productId}`);
            return response.data;
        } catch (error) {
            throw new Error('Error fetching product');
        }
    }

    async createProduct(productData) {
        try {
            const response = await apiService.post('/products', productData);
            return response.data;
        } catch (error) {
            throw new Error('Error creating product');
        }
    }

    async updateProduct(productId, productData) {
        try {
            const response = await apiService.put(`/products/${productId}`, productData);
            return response.data;
        } catch (error) {
            throw new Error('Error updating product');
        }
    }

    async deleteProduct(productId) {
        try {
            const response = await apiService.delete(`/products/${productId}`);
            return response.data;
        } catch (error) {
            throw new Error('Error deleting product');
        }
    }
}

export default new ProductService();