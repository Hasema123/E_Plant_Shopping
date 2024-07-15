import { createSlice } from '@reduxjs/toolkit';

export const CreateSl = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    plantNumber: 0// Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
        state.plantNumber += 1;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
        state.plantNumber += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem && existingItem.quantity>1) {
        existingItem.quantity--;
        state.plantNumber -= 1;
      } else {
        state.items = state.items.filter(item => item.name !== action.payload);
        state.plantNumber -= 1;
      }
    },
    removeItem: (state, action) => {
      state.plantNumber = state.plantNumber -item.quantity;
      state.items = state.items.filter(item => item.name !== action.payload);
    },
  },
});

export const { addItem, removeItem, decreaseQuantity } = CreateSl.actions;

export default CreateSl.reducer;
