import { createSlice } from "@reduxjs/toolkit";

interface FilterState {
  league: string;
}

const initialState: FilterState = {
  league: "All Leagues",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setLeagueFilter: (state, action) => {
      state.league = action.payload;
    },
  },
});

export const { setLeagueFilter } = filterSlice.actions;

export default filterSlice.reducer;
