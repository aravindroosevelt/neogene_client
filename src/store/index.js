import { configureStore } from '@reduxjs/toolkit'
import subjectReducer from './features/subjectSlice'
import scanReducer from './features/scanSlice'
import subjectTaskReducer from './features/subjectTaskSlice'
import toastSlice from './features/toastSlice'
const store = configureStore({
  reducer: {
    subject: subjectReducer,
    scan: scanReducer,
    subjectTask: subjectTaskReducer,
    toast: toastSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
export default store
