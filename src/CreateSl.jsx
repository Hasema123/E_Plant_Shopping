import { createSlice } from '@reduxjs/toolkit';

export const CreateSl = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
    
    },
    removeItem: (state, action) => {
    },
    updateQuantity: (state, action) => {
    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CreateSl.actions;

export default CreateSl.reducer;
