import axios from './axiosConfig'

export const getUsers = async () => {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve()
    }, 1000)
  )
  return axios.get('/users')
}

export const getUserbyId = async (id) => {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve()
    }, 1000)
  )
  return axios.get(`/users/${id}`)
}

export const updateUser = async (userId, userData) => {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve()
    }, 1000)
  )
  return axios.put(`/users/${userId}`, userData)
}

export const deleteUser = async (userId) => {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve()
    }, 1000)
  )
  return axios.delete(`/users/${userId}`)
}
