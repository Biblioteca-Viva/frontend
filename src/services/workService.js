import api from './api';

export async function getAllWorks(type = null, limit = null) {
    const params = {};
    if (type) params.type = type;
    if (limit) params.limit = limit;

    const response = await api.get('/work', { params });
    console.log('formato da resposta:', response.data);

    if (Array.isArray(response.data)) {
        return response.data;
    }
    if (response.data?.content && Array.isArray(response.data.content)) {
        return response.data.content;
    }
    return [];
}

export async function getWorkById(id) {
    const response = await api.get(`/work/${id}`);
    return response.data;
}

export async function createWork(type, data) {
    const response = await api.post(`/work/${type}`, data);
    return response.data;
}

export async function updateWork(type, id, data) {
    const response = await api.put(`/work/${type}/${id}`, data);
    return response.data;
}

export async function deleteWork(id) {
    await api.delete(`/work/${id}`);
}

export async function likeWork(id) {
    const response = await api.post(`/work/${id}/like`);
    return response.data;
}