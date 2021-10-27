import { configureStore } from "@reduxjs/toolkit";
import reservationReducer from "../features/reservationSlice";
import customerReducer from "../features/customerSlice";

const store = configureStore({
    reducer:{
        reservation: reservationReducer,
        customer: customerReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
