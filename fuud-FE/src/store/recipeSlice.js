import { createSlice } from "@reduxjs/toolkit";

const recipeSlice = createSlice({
  name: "recipe",
  initialState: {
    recipes: [],
    currentRecipe: null,
    currentRecipeId: "",
  },
  reducers: {
    replaceRecipes: (state, action) => {
      console.log(action.payload.data);
      state.recipes = action.payload.data;
    },
    createRecipe: (state, action) => {
      state.recipes.unshift(action.payload);
    },
    storeCurrentId: (state, action) => {
      state.currentRecipeId = action.payload;
    },
    storeOneRecipe: (state, action) => {
      state.currentRecipe = action.payload;
    },
    deleteRecipe: (state, action) => {
      const index = state.recipes.findIndex((el) => el._id === action.payload);
      state.recipes.splice(index, 1);
    },
    emptyCurrentRecipe: (state, action) => {
      state.currentRecipe = null;
    },
    updateCurrentRecipe: (state, action) => {
      const index = state.recipes.findIndex(
        (el) => el._id === action.payload._id
      );
      state.recipes.splice(index, 1, action.payload);
      state.currentRecipe = { data: action.payload };
    },
  },
});

export const recipeActions = recipeSlice.actions;

export default recipeSlice;

// const recipesClone = state.recipes;
//       const index = state.recipes.findIndex(
//         (el) => el.id === action.payload.id
//       );
//       recipesClone.splice(index, 1, action.payload);
//       state.recipes = recipesClone;
//       state.currentRecipe = action.payload;
