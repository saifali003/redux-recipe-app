import {createSlice} from "@reduxjs/toolkit";
export const favoriteSlice = createSlice({
    name : "favorite",
    initialState:{
        favorites : [],
    },
    reducers:{
     addToFavorite:(state,action)=>{
      const exist = state.favorites.find((item)=> item.idMeal===action.payload.idMeal);
      if(!exist){
        state.favorites.push(action.payload);
      }
    },
    removeFromFavorite :(state,action)=>{
        state.favorites = state.favorites.filter((item)=> item.idMeal!==action.payload);
    }
    }
});
export const {addToFavorite,removeFromFavorite} = favoriteSlice.actions;
export default favoriteSlice.reducer;
