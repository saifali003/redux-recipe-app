import {createSlice} from "@reduxjs/toolkit";
export const searchSlice = createSlice({
    name : "search",
    initialState:{
        query:"",
        category : "all"
    },
    reducers:{
        setSearch:(state,action)=>{
        state.query = action.payload;
    },
    setCategory : (state,action)=>{
        state.category = action.payload;
    }
    }
});
export const {setSearch,setCategory} = searchSlice.actions;
export default searchSlice.reducer;