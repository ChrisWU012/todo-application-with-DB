import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import authReducer from './authSlice';
import logger from 'redux-logger';


export const store = configureStore({
    reducer: {
        todoStore: todoReducer,
        authStore: authReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
})