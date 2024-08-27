import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counterSlice";
import cartSlice from "./features/cartSlice";
import formSlice from "./features/formSlice";

const store = configureStore({
    reducer: {
        counter: counterSlice,
        cart: cartSlice,
        form: formSlice
    }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {counter: counterState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;