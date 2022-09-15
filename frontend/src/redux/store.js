import { configureStore } from '@reduxjs/toolkit'
import linksReducer from './todoSlice'
import logger from 'redux-logger'


export const store = configureStore({
    reducer: {
        linksStore: linksReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
})