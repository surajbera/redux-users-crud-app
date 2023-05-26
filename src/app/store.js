/* libraries */
import { configureStore } from '@reduxjs/toolkit'

/* utilities */
import usersReducer from 'src/features/users/usersSlice'
import themeReducer from 'src/features/theme/themeSlice'

export const store = configureStore({
  reducer: {
    users: usersReducer,
    theme: themeReducer,
  },
})
