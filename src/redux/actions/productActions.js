export const setProducts = (products)=>{
   return {
       type:"SET_PRODUCTS",
       payload: products
   }

}


export const selectedProducts = (product)=>{
    return {
        type:"SElECTED_PRODUCTS",
        payload: product
    }
 
 }

 
export const removeSelected = ()=>{
    return {
        type:"REMOVE_SELECTED",
    }
 
 }