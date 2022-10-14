import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    characters: [],
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setCharacters: (state, action) => {
            state.characters = action.payload;
        },
        removeCharacterFromAllCollection(state, action) {
            state.characters = state.characters.filter(char => action.payload != char.id);
        },
        addCharAgain: (state, action) => {
            state.characters.splice(action.payload.index, 0, action.payload);
        },
    },
});



// Action creators are generated for each case reducer function
export const { removeCharacterFromAllCollection, setCharacters, addCharAgain } = counterSlice.actions;

export default counterSlice.reducer