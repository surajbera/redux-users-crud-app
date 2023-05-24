/* libraries */
import { createSlice } from '@reduxjs/toolkit'

/* utilities */
import { getUsers, getUser, updateUser, deleteUser } from './usersThunks'

const initialState = {
  users: [],
  selectedUser: null,
  isLoading: false,
  error: null,
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true
        state.isError = null
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = false
        state.users = action.payload
        state.isError = null
      })
      .addCase(getUsers.rejected, (state, action) => {
        console.log('Rejected state')
        state.isLoading = false
        state.isError = action.error.message || 'Something went wrong'
      })
      .addCase(getUser.pending, (state) => {
        state.isLoading = true
        state.isError = null
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.selectedUser = action.payload
        state.isError = null
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading = false
        state.isError = action.error.message || 'Something went wrong'
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true
        state.isError = null
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = null
        state.selectedUser = null
        const updatedUser = action.payload
        state.users = state.users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false
        state.isError = action.error.message || 'Something went wrong'
      })
      .addCase(deleteUser.pending, (state) => {
        state.isLoading = true
        state.isError = null
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.isLoading = false
        const userId = action.payload
        state.users = state.users.filter((user) => user.id !== userId)
        state.selectedUser = null
        state.isError = null
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.isLoading = false
        state.isError = action.error.message || 'Something went wrong'
      })
  },
})

export const selectUsers = (state) => state.users.users
export const selectSelectedUser = (state) => state.users.selectedUser
export default usersSlice.reducer
