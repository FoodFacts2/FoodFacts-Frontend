import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const API_BASE_URL = 'http://localhost:3000'; // Puedes usar cualquier URL base ficticia

const apiService = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Configurar el mock adapter
const mock = new MockAdapter(apiService);

// Variable para almacenar las credenciales registradas
let registeredUsers = [];

// Simular la respuesta para el registro de usuario
mock.onPost('/auth/register').reply((config) => {
    const { email, password } = JSON.parse(config.data);

    // Verificar si el usuario ya está registrado
    const existingUser = registeredUsers.find(user => user.email === email);
    if (existingUser) {
        return [409, { message: 'User already registered' }];
    }

    // Registrar al usuario
    const newUser = { id: registeredUsers.length + 1, email, password };
    registeredUsers.push(newUser);

    return [201, {
        message: 'User registered successfully',
        user: newUser,
    }];
});

// Simular la respuesta para el inicio de sesión
mock.onPost('/auth/login').reply((config) => {
    const { email, password } = JSON.parse(config.data);

    // Verificar si las credenciales son válidas
    const user = registeredUsers.find(user => user.email === email && user.password === password);
    if (user) {
        return [200, {
            message: 'Login successful',
            token: 'fake-jwt-token',
            user: {
                id: user.id,
                email: user.email,
            },
        }];
    } else {
        return [401, { message: 'Invalid credentials' }];
    }
});

// Simular la respuesta para obtener todos los productos
mock.onGet('/products').reply(200, [
    { id: 1, name: 'Product 1', description: 'Description of product 1' },
    { id: 2, name: 'Product 2', description: 'Description of product 2' },
    { id: 3, name: 'Product 3', description: 'Description of product 3' },
    { id: 4, name: 'Product 4', description: 'Description of product 4' },
    { id: 5, name: 'Product 5', description: 'Description of product 5' },
]);

// Simular la respuesta para obtener un producto por ID
mock.onGet(/\/products\/\d+/).reply((config) => {
    const productId = config.url.split('/').pop();
    const product = { id: productId, name: `Product ${productId}`, description: `Description of product ${productId}` };
    return [200, product];
});

// Simular la respuesta para crear un nuevo producto
mock.onPost('/products').reply((config) => {
    const productData = JSON.parse(config.data);
    const newProduct = { id: 6, ...productData };
    return [201, newProduct];
});

// Simular la respuesta para actualizar un producto
mock.onPut(/\/products\/\d+/).reply((config) => {
    const productId = config.url.split('/').pop();
    const productData = JSON.parse(config.data);
    const updatedProduct = { id: productId, ...productData };
    return [200, updatedProduct];
});

// Simular la respuesta para eliminar un producto
mock.onDelete(/\/products\/\d+/).reply((config) => {
    const productId = config.url.split('/').pop();
    return [200, { message: `Product ${productId} deleted successfully` }];
});

export default apiService;