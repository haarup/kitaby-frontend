import { configureStore } from '@reduxjs/toolkit';
import tenantReducer from './slices/tenantSlice';
import productFilterReducer from './slices/productFilterSlice';
import cartReducer from './slices/cartSlice';
import categoryReducer from './slices/categoryIDSlice';

const store = configureStore({
  reducer: {
    tenant: tenantReducer,
    cart: cartReducer,
    categoryID: categoryReducer,
    productFilter: productFilterReducer,
  },
});

export default store;
