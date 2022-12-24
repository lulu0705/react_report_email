import {createSlice} from "@reduxjs/toolkit";
import products from "../json/products.json";

const initialState ={ productsContent:products};
const productsSlice=createSlice({
    name:'products',
    initialState,
    reducers:{
        setProducts: (state,action)=>{
            state.productsContent = action.payload;
        },
    },
});


//export state to global
export const selectProducts= (state)=> state.products.productsContent;

//export actions to global
export const {setProducts}=productsSlice.actions;

//export reducer to global
export default productsSlice.reducer;