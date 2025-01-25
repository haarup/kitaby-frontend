import { createSlice } from "@reduxjs/toolkit";

const calculateTotal = (items) => {
  return items.reduce((total, item) => total + item.qty * item.price, 0);
};

const calculateTotalQuantity = (items) => {
  return items.reduce((total, item) => total + item.qty, 0);
};

const initialState = {
  cart: {
    items: JSON.parse(localStorage.getItem("cart"))?.items || [],
    total: JSON.parse(localStorage.getItem("cart"))?.total || 0,
    totalQuantity: JSON.parse(localStorage.getItem("cart"))?.totalQuantity || 0,
  },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productIndex = state.cart.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (productIndex >= 0) {
        state.cart.items[productIndex].qty += action.payload.qty;
      } else {
        const product = {
          ...action.payload,
          image: action.payload.image || "",
        };
        state.cart.items.push(product);
      }

      state.cart.total = calculateTotal(state.cart.items);
      state.cart.totalQuantity = calculateTotalQuantity(state.cart.items);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeFromCart: (state, action) => {
      state.cart.items = state.cart.items.filter(
        (item) => item.id !== action.payload
      );
      state.cart.total = calculateTotal(state.cart.items);
      state.cart.totalQuantity = calculateTotalQuantity(state.cart.items);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    clearCart: (state) => {
      state.cart.items = [];
      state.cart.total = 0;
      state.cart.totalQuantity = 0;
      localStorage.removeItem("cart");
    },
    updateQuantity: (state, action) => {
      const { id, qty } = action.payload;
      const productIndex = state.cart.items.findIndex((item) => item.id === id);

      if (productIndex >= 0) {
        if (qty > 0) {
          state.cart.items[productIndex].qty = qty;
        } else {
          state.cart.items.splice(productIndex, 1);
        }
      }

      state.cart.total = calculateTotal(state.cart.items);
      state.cart.totalQuantity = calculateTotalQuantity(state.cart.items);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export const { addToCart, removeFromCart, clearCart, updateQuantity } =
  cartSlice.actions;

// Selector للوصول إلى عنصر معين بناءً على ID
export const selectCartItemById = (state, id) =>
  state.cart.items.find((item) => item.id === id);

export default cartSlice.reducer;
