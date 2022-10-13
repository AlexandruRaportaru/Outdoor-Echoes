import * as actionTypes from './shopping-types';

export const addToCart = (itemID, itemSIZE, itemCOUNT) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: itemID,
            size: itemSIZE,
            counter: itemCOUNT
        }
    }
}

export const removeFromCart = (itemID, itemSIZE) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            id: itemID,
            size: itemSIZE
        }
    }
} 

export const adjustQty = (itemID, value, itemSIZE) => {
    return {
        type: actionTypes.ADJUST_QUANTITY,
        payload: {
            id: itemID,
            quantity: value,
            size: itemSIZE,
        }
    }
} 

export const emptyCart = () => {
    return {
        type: actionTypes.EMPTY_CART
    }
} 