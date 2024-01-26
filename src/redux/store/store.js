import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slices/authSlice";
import proposalSlice from "../slices/proposal";
const store = configureStore(
    {
        reducer:{
            auth:authSlice,
            proposal:proposalSlice
        }
    }
)

export default store;