import * as actionTypes from './shopping-types';
import { data } from '../../constants';

const INITIAL_STATE = {
    products: data.products,
    cart: [],
    currentItem: null
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.ADD_TO_CART:
            
            const item = state.products.find(prod => prod.id === action.payload.id)

            const inCart = state.cart.find((item) => 
                item.id === action.payload.id && item.selectedSize === action.payload.size ? true : false
            )

            return {
                ...state,
                cart: inCart 
                    ? state.cart.map((item) => 
                        item.id === action.payload.id 
                            ? {...item, qty: item.qty + 1} 
                            : item
                        ) 
                    : [...state.cart, {...item, qty: action.payload.counter, selectedSize: action.payload.size}]
            };

        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => {
                    return !(item.id  === action.payload.id && item.selectedSize === action.payload.size)
                })
            };

        case actionTypes.ADJUST_QUANTITY:
            return {
                ...state,
                cart: state.cart.map((item) => 
                    item.id === action.payload.id && item.selectedSize === action.payload.size
                        ? {...item, qty: +action.payload.quantity} 
                        : item
                )
            };

        case actionTypes.EMPTY_CART:
            return {
                ...state,
                cart: [] 
            };

        default: 
            return state;
    }
};

export default shopReducer;