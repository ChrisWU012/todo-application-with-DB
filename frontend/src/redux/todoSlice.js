import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    lists: [
        { todo: 'buy egg' },
        { todo: 'buy fish' },
        { todo: 'sell socks' }
    ]
}


export const linksSlice = createSlice({
    name: 'lists',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.lists = state.lists.push([action.payload])
        },
        clearTodo: state => {
            state.lists = []
        }
    }
})


export const { addTodo, clearTodo } = linksSlice.actions;
export default linksSlice.reducer;