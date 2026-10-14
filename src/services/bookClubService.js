import api from './api';

export async function getAllBookClubs() {
    const response = await api.get('/bookclub');
    return response.data;
}

export async function getBookClubById(id) {
    const response = await api.get(`/bookclub/${id}`);
    return response.data;
}

export async function getNextBookClub() {
    const response = await api.get('/bookclub/next');
    return response.data;
}

export async function createBookClub(data, imageFile) {
    const formData = new FormData();
    formData.append('data', new Blob([JSON.stringify(data)], { type: 'application/json' }));
    formData.append('image', imageFile);

    const response = await api.post('/bookclub', formData);
    return response.data;
}

export async function updateBookClub(id, data, imageFile = null) {
    const formData = new FormData();
    formData.append('data', new Blob([JSON.stringify(data)], { type: 'application/json' }));
    if (imageFile) {
        formData.append('image', imageFile);
    }

    const response = await api.put(`/bookclub/${id}`, formData);
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

export async function getBookClubReviews(bookClubId, page = 0, size = 50) {
    const response = await api.get(`/bookclub/${bookClubId}/reviews`, {
        params: { page, size }
    });
    return response.data;
}

export async function createBookClubReview(bookClubId, data) {
    const response = await api.post(`/bookclub/${bookClubId}/reviews`, data);
    return response.data;
}

export async function getBookClubParticipants(id) {
    const response = await api.get(`/bookclub/${id}/participants`);
    return response.data;
}