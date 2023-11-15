import { configureStore, createSlice } from "@reduxjs/toolkit";

let cart = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addCount(state, action) {
      let 번호 = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state[번호].count++;
    },
    addItem(state, action) {
      // 상품이 이미 카트에 있는지 확인
      let existingItem = state.find((item) => item.id === action.payload.id);

      // 이미 있는 상품이면 수량 증가
      if (existingItem) {
        existingItem.count++;
      } else {
        // 없는 상품이면 새로 추가
        state.push(action.payload);
      }
    },
  },
});

export let { addCount, addItem } = cart.actions;

export default configureStore({
  reducer: {
    cart: cart.reducer,
  },
});
