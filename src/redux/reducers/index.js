import { combineReducers } from "redux";
import { productReducer , selectedProduct} from "./productReducer";




export const allReducers = combineReducers({
    myreducers: productReducer, 
    sproduct : selectedProduct
})