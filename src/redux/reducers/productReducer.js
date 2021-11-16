


const initialState = {
    products: [{
        name:"Qasim", 
        Father:"Amin"
    }]
}

export const productReducer = (state = initialState, action)=>{

    switch(action.type){
        case "SET_PRODUCTS":
            return {...state, products : action.payload}
        default:
              return  state  
    }

}

export const selectedProduct = (state={} , {type, payload})=>{
    switch(type){
        case "SElECTED_PRODUCTS":
            return {...state, ...payload}
        case "REMOVE_SELECTED":
            return {}
        default:
              return  state
    }
}