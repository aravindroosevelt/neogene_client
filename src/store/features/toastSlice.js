import { createSlice } from '@reduxjs/toolkit'

const toastSlice = createSlice({
  name: 'toast',
  initialState: { type: null, msg: null },
  reducers: {
    populate(state, action) {
      state.type = action.payload.type
      state.msg = action.payload.msg
    },
    close(state, action) {
      state.type = null
      state.msg = null
    },
  },
})
export const toast = toastSlice.actions
export default toastSlice.reducer
