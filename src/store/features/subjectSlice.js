import { createSlice } from '@reduxjs/toolkit'

const displayInitialState = {
  subject: [],
}
const subjectSlice = createSlice({
  name: 'subject',
  initialState: displayInitialState,
  reducers: {
    subjectFetch: (state, action) => {
      state.subject = [action.payload]
    },
  },
})

export const subject = subjectSlice.actions
export default subjectSlice.reducer
