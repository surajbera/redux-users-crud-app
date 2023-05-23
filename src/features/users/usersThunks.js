import { createAsyncThunk } from '@reduxjs/toolkit'
import * as api from 'src/api/apiService'

export const getUsers = createAsyncThunk('users/getUsers', async () => {
  const response = await api.getUsers
  return response.data
})

export const getUser = createAsyncThunk('users/getUserbyId', async (userId) => {
  const response = await api.getUserbyId(userId)
  return response.data
})

export const updateUser = createAsyncThunk('users/updateUser', async (userId, userData) => {
  const response = await api.updateUser(userId, userData)
  return response.data
})

export const deleteUser = createAsyncThunk('users/deleteUser', async (userId) => {
  const response = await api.deleteUser(userId)
  return response.data
})
