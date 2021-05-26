import { ADD_TO_CART, CLEAR, REMOVE_ITEM, SET_CART, SET_CART_ID, SET_HEADER, SET_ITEM_IN_CART, SET_USER } from "./types";

const Reducer = (state, action) => {
    let cart;
    switch(action.type) {
        case SET_USER: 
            return {
                ...state,
                user: action.payload
            }
        case SET_CART:
            return {
                ...state,
                cart: action.payload
            }
        case ADD_TO_CART:
            cart = state.cart
            cart.push(action.payload)
            return {
                ...state,
                cart
            }
        case SET_ITEM_IN_CART:
            cart = state.cart
            cart[action.payload.index] = action.payload.item
            return {
                ...state,
                cart
            }
        case SET_HEADER: 
            return {
                ...state,
                isHeaderOpen: action.payload
            }   
        case REMOVE_ITEM: 
            cart = state.cart
            cart.splice(action.payload.index, 1)
            return {
                ...state,
                cart
            }
        case CLEAR:
            return {
                cart: [],
                user: {}
            }
        default: return state
    }
}

export default Reducer