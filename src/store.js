import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CreateSl';

 const store = configureStore({
    reducer: {
    cart: cartReducer
    },
});
export default store