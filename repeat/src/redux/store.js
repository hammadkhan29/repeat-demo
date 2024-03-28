import { configureStore } from '@reduxjs/toolkit'
import goalsSlice from './slices/goalsSlice'

export const store = configureStore({
  reducer: {
    goals: goalsSlice
  },
})