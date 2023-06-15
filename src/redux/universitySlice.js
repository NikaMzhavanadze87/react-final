import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const universitySlice = createSlice({
  name: 'universities',
  initialState,
  reducers: {
    setUniversities: (state, action) => {
      return action.payload;
    },
  },
});

export const { setUniversities } = universitySlice.actions;
export default universitySlice.reducer;
