import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import cartReducer from './ducks/cart';
import productsReducer from './ducks/products';
//import posApp from './reducers';
import paymentReducer from './ducks/order';
import App from './App';
import productsData from './data/products';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios'
import {getProducts,createOrder,getOrders,updateOrder,deleteOrder} from './data/products'

// https://www.npmjs.com/package/axios
axios({
    baseURL: 'http://localhost:8080/',

    // `url` is the server URL that will be used for the request
    url: '/products',
    // `method` is the request method to be used when making the request
    method: 'get', // default
    // // `params` are the URL parameters to be sent with the request
    // // Must be a plain object or a URLSearchParams object
    // params: {
    //     ID: 12345
    // },
    // // `data` is the data to be sent as the request body
    // // Only applicable for request methods 'PUT', 'POST', and 'PATCH'
    // // When no `transformRequest` is set, must be of one of the following types:
    // // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
    // // - Browser only: FormData, File, Blob
    // // - Node only: Stream, Buffer
    // data: {
    //     firstName: 'Fred'
    // },
})
    .then(function (response) {
        const rootReducer = combineReducers({
            cart: cartReducer,
            products: productsReducer
    });

        let store = createStore(        // creation of the main data storage <STORE>
            rootReducer,
            {
                products: response.data, // initial store values
//                s: createStore(posApp)
            },
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // for debugging
        );

// creation of the provider that give the store data to the App Provider <PROVIDER>. Makes store available to containers
        render(
            <Provider store={store}>
                <App />
            </Provider>,
            document.getElementById('root')
        );
    })
    .catch(function (error) {
        console.log(error);
    });

// EP1: retrieve products
getProducts();

// EP2: create order
// let customer = "user1";
// let date = `${new Date().getFullYear()}/${new Date().getMonth() + 1}/${new Date().getDate()}`;    //ES6 backtick syntax
// let products = [{
//     "id": 3 },
//     {
//         "id": 4
//     } ];
// createOrder(customer, products, date);

// EP3: retrieve orders
getOrders(1,1);

// EP4: change order status
// let id=19;
// let status="COMPLETED";
// updateOrder(id,status);

// EP5: delete order
// let id=19;
// deleteOrder(id);
