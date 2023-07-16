import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isSidedrawerOpen: true,
  },
  reducers: {
    toggleSidedrawer: (state) => {
      state.isSidedrawerOpen = !state.isSidedrawerOpen;
    },
    closeSideDrawer: (state) => {
      state.isSidedrawerOpen = false;
    },
    openSideDrawer: (state) => {
      state.isSidedrawerOpen = true;
    },
  },
});

export const { toggleSidedrawer, closeSideDrawer, openSideDrawer } =
  appSlice.actions;
export default appSlice.reducer;
