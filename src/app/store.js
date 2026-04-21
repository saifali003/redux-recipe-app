import {configureStore} from "@reduxjs/toolkit";
import recipeReducer from "../features/recipeSlice";
import searchReducer from "../features/recipeSearch";
import favoriteReducer from "../features/favoriteRecipe";
export const store = configureStore({
    reducer:{
      recipe:recipeReducer,
      search:searchReducer,
      favorite:favoriteReducer
    }
});