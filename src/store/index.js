import { configureStore } from '@reduxjs/toolkit'
import subjectReducer from './features/subjectSlice'
import scanReducer from './features/scanSlice'
const store = configureStore({
  reducer: { subject: subjectReducer, scan: scanReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
export default store
