import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchJoke = createAsyncThunk("joke/fetchJoke",
    async () => {
        const response = await fetch("https://icanhazdadjoke.com/", {
            headers: {
                Accept: "application/json",
            },
        });
        const data = await response.json();
        return data.joke;
    }
);

const jokeSlice = createSlice({
    name: "joke",
    initialState: {
        joke: "",
        loading: false,
        error: null,
    },
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(fetchJoke.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchJoke.fulfilled, (state, action) => {
                state.loading = false;
                state.joke = action.payload;
            })
            .addCase(fetchJoke.rejected, (state) => {
                state.loading = false;
                state.error = "Failed to fetch joke";
            });
    },
});

export default jokeSlice.reducer;