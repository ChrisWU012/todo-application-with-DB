import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    lists: []
}


export const linksSlice = createSlice({
    name: 'lists',
    initialState,
    reducers: {
        getTodo: (state, action) => {
            state.lists = action.payload;
        },
        addTodo: (state, action) => {
            state.lists = state.lists.push([action.payload])
        },
        clearTodo: state => {
            state.lists = []
        }
    }
})

export const { getTodo, addTodo, clearTodo } = linksSlice.actions;

export const getTodoThunk = () => async dispatch => {
    const token = localStorage.getItem("TOKEN");
    const response = await axios(`${process.env.REACT_APP_API_SERVER}/todo`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    dispatch(getTodo(response.data));
}

export const addTodoThunk = (body) => async dispatch => {
    const token = localStorage.getItem("TOKEN");
    await axios.post(`${process.env.REACT_APP_API_SERVER}/todo`, {
        Authorization: `Bearer ${token}`,
        Body: { body }
    });
    dispatch(getTodoThunk());
}

export const clearTodoThunk = () => async dispatch => {
    const token = localStorage.getItem("TOKEN");
    await axios.delete(`${process.env.REACT_APP_API_SERVER}/todo`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    dispatch(clearTodo());
}

export default linksSlice.reducer;