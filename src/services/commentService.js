import api from './api';

export async function getComments(workId) {
    const response = await api.get(`/work/${workId}/comments`);
    return response.data.content;
}

export async function createComment(workId, content) {
    const response = await api.post(`/work/${workId}/comments`, { content });
    return response.data;
}

export async function updateComment(workId, commentId, content) {
    const response = await api.put(`/work/${workId}/comments/${commentId}`, { content });
    return response.data;
}

export async function deleteComment(workId, commentId) {
    await api.delete(`/work/${workId}/comments/${commentId}`);
}