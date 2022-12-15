import api from "./api";

export const usersList = async () => {

    const response = await api.get('/api/users');

    return response.data;
}

export const createUser = async (user) => {

    const response = await api.post('/api/users', user);

    return response.data;
}

export const resetPassword = async (email) => {

    const response = await api.get(`/api/users/reset-password?email=${email}`);

    return response.data;
}