import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    favoriteCharacters: [],
};
export const favoriteSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addCharacter: (state, action) => {
            state.favoriteCharacters.push(action.payload);
        },
        deleteCharacter(state, action) {
            // console.log('test');
            state.favoriteCharacters = state.favoriteCharacters.filter(char => char.id !== action.payload)
        },
    },
});

export const { addCharacter, deleteCharacter } = favoriteSlice.actions;

export default favoriteSlice.reducer;
