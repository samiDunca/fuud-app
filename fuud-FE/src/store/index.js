import { configureStore } from "@reduxjs/toolkit";
import recipeSlice from "./recipeSlice";

const store = configureStore({
  reducer: {
    recipe: recipeSlice.reducer,
    // forgotPass: forgotPassSlice.reducer,
  },
});

export default store;
