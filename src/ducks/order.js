import { getProduct } from '../ducks/products';         // this ES6 way { getProduct }  gets only getProduct from '../ducks/products' and refers to it by using the function name directly
import {combineReducers} from 'redux'



// actions
const PAYMENT_ADD   = 'payment/ADD';
const PAYMENT_REMOVE = 'payment/REMOVE';

// reducer
const initialState = {
    items: [], // array of product ids
    currency: 'EUR'
};

export default function payment(state = initialState, action = {}) {
    switch (action.type) {
        case PAYMENT_ADD:
            return handleCartAdd(state, action.payload);
        case PAYMENT_REMOVE:
            return handleCartRemove(state, action.payload);
        default:
            return state;
    }
}

function handleCartAdd(state, payload) {
    return {
        ...state,
        items: [ ...state.items, payload.productId ]
    };
}

function handleCartRemove(state, payload) {
    return {
        ...state,
        items: state.items.filter(id => id !== payload.productId)
    };
}



// action creators
export function addToCart(productId) {
    return {
        type: PAYMENT_ADD,
        payload: {
            productId
        }
    }
}

export function removeFromCart(productId) {
    return {
        type: PAYMENT_REMOVE,
        payload: {
            productId
        }
    }
}


// selectors
export function isInCart(state, props) {
    return state.cart.items.indexOf(props.id) !== -1;
}

export function getItems(state, props) {
    return state.cart.items.map(id => getProduct(state, { id }));
}

export function getTotal(state, props) {
    return state.cart.items.reduce((acc, id) => {
        const item = getProduct(state, { id });
        return acc + item.price;
    }, 0);
}
