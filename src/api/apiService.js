import axios from './axiosConfig'

export const getUsers = () => axios.get('/users')
export const getUserbyId = (id) => axios.get(`/users/${id}`)
export const updateUser = (userId, userData) => axios.put(`/users/${userId}`, userData)
export const deleteUser = (userId) => axios.delete(`/users/${userId}`)
