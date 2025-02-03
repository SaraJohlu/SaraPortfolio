import { configureStore } from "@reduxjs/toolkit";
import  guestNameReducer  from "./slicers"

const store = configureStore({

    reducer: {
        user: guestNameReducer,
    }
})

export default store
