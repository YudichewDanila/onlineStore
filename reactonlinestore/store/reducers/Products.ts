import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Products } from "../../types/productstype";




const initialState: Products = {
    Products:[],
    CopyProducts:[]
}

export const useproducts = createSlice({
    name:'products',
    initialState,
    reducers:{
        addProducts(state, action:PayloadAction<Array<{id:number, ImgProduct:string, ProductName:string, CategoryName:number, ProductPrice:string}>>){
            state.Products = action.payload;
            state.CopyProducts = action.payload;
        },
        updateProduct(state, action:PayloadAction<Array<{id:number, ImgProduct:string, ProductName:string, CategoryName:number, ProductPrice:string}>>){
            state.Products = action.payload;
        }
    }
})

export default useproducts.reducer;