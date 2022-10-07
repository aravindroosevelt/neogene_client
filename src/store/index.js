import { configureStore } from "@reduxjs/toolkit"
import subjectReducer from "./subjectSlice"
import scanReducer from "./scanSlice"
const store = configureStore(
    {
        reducer: { subject: subjectReducer, scan: scanReducer },
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware({
                serializableCheck: false,
            }),
    }
)
export default store