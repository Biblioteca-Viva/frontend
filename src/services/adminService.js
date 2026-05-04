import api from './api';

export async function getAllUsers(status = null) {
    const params = status ? { status } : {};
    const response = await api.get('/admin', { params });
    return response.data.content;
}

export async function approveUser(id) {
    await api.patch(`/admin/approve/${id}`);
}

export async function rejectUser(id) {
    await api.patch(`/admin/reject/${id}`);
}

export async function blockUser(id) {
    await api.patch(`/admin/block/${id}`);
}