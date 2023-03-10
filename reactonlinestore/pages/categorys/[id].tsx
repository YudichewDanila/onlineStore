import React from "react";
import Header from "../../components/header/ui/Header";
import SideburProducts from "../../components/sidebur/ui/SideburProducts";
import ProductsWindow from "../../components/main/ui/Productswindow";
import Products from "@/store/reducers/Products";
//import {showProducts} from "../../components/main/productswindow";

/*
export async function getServerSideProps(context){
    const {id} = context.params;
    let result = await showProducts(id);
    return{
      props:{products:result}
  }
}
*/

const Category = ({productsData=[{id:1}]})=>{
    return(
        <>
        <Header />
        <main>
            <SideburProducts />
            <ProductsWindow products={productsData} copyProducts={[]}/>
        </main>
        </>
    )
}

export default Category;