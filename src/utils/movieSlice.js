import { createSlice } from "@reduxjs/toolkit"

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        movies: []
    },
    reducers:{
        addMovies: (state,action) => {
            state.movies.push(action.payload);
        },
    }
})

export const {addMovies} = movieSlice.actions;
export default movieSlice.reducer;
