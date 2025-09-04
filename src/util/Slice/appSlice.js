import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
     // initial value
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu:(state)=>{
      state.isMenuOpen=false
    },
    // youTube_cart:(state)=>{
    //   state.data=[]
    // }
  },
});

export const { toggleMenu , closeMenu } = appSlice.actions;
export default appSlice.reducer;
