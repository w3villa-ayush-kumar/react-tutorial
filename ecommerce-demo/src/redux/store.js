import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import jokeReducer from "./jokeSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        joke: jokeReducer,
    },
});
