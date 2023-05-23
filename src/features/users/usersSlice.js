/* libraries */
import { createSlice } from '@reduxjs/toolkit'

/* utilities */
import { getUsers, getUser, updateUser, deleteUser } from './usersThunks'

const initialState = {
  users: [],
  selectedUser: null,
  loading: false,
  error: null,
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false
        state.users = action.payload
        state.error = null
      })
      .addCase(getUsers.rejected, (state, action) => {
        console.log('Rejected state')
        state.loading = false
        state.error = action.error.message || 'Something went wrong'
      })
      .addCase(getUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false
        state.selectedUser = action.payload
        state.error = null
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Something went wrong'
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.selectedUser = null
        const updatedUser = action.payload
        state.users = state.users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Something went wrong'
      })
      .addCase(deleteUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false
        const userId = action.payload
        state.users = state.users.filter((user) => user.id !== userId)
        state.selectedUser = null
        state.error = null
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Something went wrong'
      })
  },
})

export const selectUsers = (state) => state.users.users
export default usersSlice.reducer
