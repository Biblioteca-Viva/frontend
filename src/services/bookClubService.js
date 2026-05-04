import api from './api';

export async function getAllBookClubs() {
    const response = await api.get('/bookclub');
    return response.data.content;
}

export async function getBookClubById(id) {
    const response = await api.get(`/bookclub/${id}`);
    return response.data;
}

export async function getNextBookClub() {
    const response = await api.get('/bookclub/next');
    return response.data;
}

export async function createBookClub(data) {
    const response = await api.post('/bookclub', data);
    return response.data;
}

export async function updateBookClub(id, data) {
    const response = await api.put(`/bookclub/${id}`, data);
    return response.data;
}

export async function deleteBookClub(id) {
    await api.delete(`/bookclub/${id}`);
}

export async function subscribeToBookClub(id) {
    const response = await api.post(`/bookclub/${id}/subscribe`);
    return response.data;
}

export async function unsubscribeFromBookClub(id) {
    const response = await api.post(`/bookclub/${id}/unsubscribe`);
    return response.data;
}