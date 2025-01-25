import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  openSidebars: {}
};

const sidebarSlice = createSlice({
  name: 'sidebars',
  initialState,
  reducers: {
    toggleSidebar(state, action) {
      const { id } = action.payload;
      if (!state.openSidebars[id]) {
        state.openSidebars[id] = { isOpen: false };
      }

      const isOpen = !state.openSidebars[id].isOpen;
      state.openSidebars[id].isOpen = isOpen;

      if (isOpen) {
        Object.keys(state.openSidebars).forEach((key) => {
          if (key !== id) {
            state.openSidebars[key].isOpen = false;
          }
        });
      }
    },

    openSidebar(state, action) {
      const { id } = action.payload;
      state.openSidebars[id] = { isOpen: true };

      Object.keys(state.openSidebars).forEach((key) => {
        if (key !== id) {
          state.openSidebars[key].isOpen = false;
        }
      });
    },

    closeSidebar(state, action) {
      const { id } = action.payload;
      if (state.openSidebars[id]) {
        state.openSidebars[id].isOpen = false;
      }
    },

    setSidebar(state, action) {
      const { id, open } = action.payload;
      state.openSidebars[id] = { isOpen: open };

      if (open) {
        Object.keys(state.openSidebars).forEach((key) => {
          if (key !== id) {
            state.openSidebars[key].isOpen = false;
          }
        });
      }
    },

    toggleAllSidebars(state, action) {
      const { open } = action.payload;
      Object.keys(state.openSidebars).forEach((key) => {
        state.openSidebars[key].isOpen = open;
      });
    }
  }
});

export const { toggleSidebar, openSidebar, closeSidebar, setSidebar, toggleAllSidebars } = sidebarSlice.actions;
export default sidebarSlice.reducer;
