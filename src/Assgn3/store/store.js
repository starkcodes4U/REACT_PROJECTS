// src/Assgn3/store/store.js
import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import cartReducer from './cartSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
})

export default store
