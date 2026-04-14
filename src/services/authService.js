import api from './api';

export async function login(email, password) {
    const response = await api.post('/auth/login', { email, password });
    const { token } = response.data;
    localStorage.setItem('token', token);
    localStorage.setItem('userEmail', email);
    return response.data;
}

export async function register(name, email, password) {
    const response = await api.post('/auth/register', { name, email, password });
    return response.data;
}

export function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');
}

export function isLoggedIn() {
    return !!localStorage.getItem('token');
}
