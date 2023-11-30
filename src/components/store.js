import { createStore } from "redux"

const initialState = {
    cartItems: []
}

function reducer(state=initialState, action){
    switch(action.type){
        case "add" :
            return {...state, cartItems:[...state.cartItems, action.payload]}
        case "remove":
            const filteredState = state.cartItems.filter(product => product.id !== action.payload.id)
            return {...state, cartItems: filteredState}
        default:
            return state
    }
}

export const store = createStore(reducer);