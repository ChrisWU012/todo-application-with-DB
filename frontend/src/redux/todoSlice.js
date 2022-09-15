import { createSlice } from '@reduxjs/toolkit'
import axios from "axios";

const initialState = {
    links: [
        { todo: 'Facebook', priority: 'https://www.facebook.com' },
        { todo: 'Google', priority: 'https://www.google.com' },
        { todo: 'BBC', priority: 'https://www.bbc.co.uk' }
    ]
}


export const linksSlice = createSlice({
    name: 'links',
    initialState,
    reducers: {
        addLink: (state, action) => {
            state.links = state.links.concat([action.payload])
        },
        clearLinks: state => {
            state.links = []
        }
    }
})


export const { addLink, clearLinks } = linksSlice.actions;
export default linksSlice.reducer;
export const getLinkThunk = () => async (dispatch) => {
    try {
        const response = await axios.get("http://api.open-notify.org/astros.json");
        console.log(response);
        //run success function in linksSlice.actions
    } catch {
        //run fail function in linksSlice.actions
    }
}