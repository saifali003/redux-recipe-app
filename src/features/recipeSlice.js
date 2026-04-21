import {createSlice} from "@reduxjs/toolkit";
const recipeSlice  = createSlice({
    name : "recipe",
    initialState:{
        list:[],
    },
    reducers:{
       setRecipe : (state,action)=>{
       state.list = action.payload
    }
    }
});
export const {setRecipe} = recipeSlice.actions;
export default recipeSlice.reducer;