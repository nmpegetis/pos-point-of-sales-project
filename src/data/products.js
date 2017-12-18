import axios from 'axios'

// ENDPOINT selectors included

// 1. getProducts();
// 2. createOrder(customer, items, date);
// 3. getOrders(size,page);
// 4. updateOrder(id,status);
// 5. deleteOrder(id);

// https://www.npmjs.com/package/axios
export function getProducts() {
  return axios({
    baseURL: 'http://localhost:8080/',

    // `url` is the server URL that will be used for the request
    url: '/products',

    // `method` is the request method to be used when making the request
    method: 'get', // default
  })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
}

export function createOrder(customer, products, dateCreated) {
  return axios({
    baseURL: 'http://localhost:8080/',

    // `url` is the server URL that will be used for the request
    url: '/orders',

    // `method` is the request method to be used when making the request
    method: 'post', // default

    // `headers` are custom headers to be sent
    headers: {'Content-Type': 'application/json'},

    // `validateStatus` defines whether to resolve or reject the promise for a given
    // HTTP response status code. If `validateStatus` returns `true` (or is set to `null`
    // or `undefined`), the promise will be resolved; otherwise, the promise will be
    // rejected.
    validateStatus: function (status) {
      // return status >= 200 && status < 300; // default
      return status === 201; // check status as requested in Silence project description
    },

    // // `data` is the data to be sent as the request body
    // // Only applicable for request methods 'PUT', 'POST', and 'PATCH'
    // // When no `transformRequest` is set, must be of one of the following types:
    // // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
    // // - Browser only: FormData, File, Blob
    // // - Node only: Stream, Buffer
    data: {
      customer: customer,
      dateCreated:  dateCreated,
      products: products
    },
  })
      .then(function (response) {
        console.log("response");
        console.log(response);
      })
      .catch(function (error) {
        console.log("error");
        console.log(error);
      });
}

export function getOrders(size,page) {
  return axios({
    baseURL: 'http://localhost:8080/',

    // `url` is the server URL that will be used for the request
    url: '/orders',

    // `method` is the request method to be used when making the request
    method: 'get', // default

    // `headers` are custom headers to be sent
    headers: {'Content-Type': 'application/json'},

    // // `params` are the URL parameters to be sent with the request
    // // Must be a plain object or a URLSearchParams object
    params: {
      size: size,
      page: page
    },
  })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}

export function updateOrder(id,status) {
  return axios({
    baseURL: 'http://localhost:8080/',

    // `url` is the server URL that will be used for the request
    url: `/orders/${id}/${status}`, //ES6 backtick syntax

    // `method` is the request method to be used when making the request
    method: 'put', // default

    // `headers` are custom headers to be sent
    headers: {'Content-Type': 'application/json'},
  })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
}

export function deleteOrder(id) {
  return axios({
    baseURL: 'http://localhost:8080/',

    // `url` is the server URL that will be used for the request
    url: `/orders/${id}`, //ES6 backtick syntax

    // `method` is the request method to be used when making the request
    method: 'delete', // default
  })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
}


// let data = [
//   {
//     id: 1,
//     name: 'product1',
//     description: "sample description",
//     price: 12.3,
//     quantity: 5,
//     currency: 'EUR',
//     image: 'images/product-coming-soon.jpg',
//     url: 'https://onceuponaspice.com/2014/04/13/coffee-o-caffe-making-sense-of-it-all/'
//   },
//   {
//     id: 2,
//     name: 'product2',
//     description: "sample description",
//     price: 344.3,
//     quantity: 15,
//     currency: 'EUR',
//     image: 'images/product-coming-soon.jpg',
//     url: 'https://onceuponaspice.com/2014/04/13/coffee-o-caffe-making-sense-of-it-all/'
//   },
//   {
//     id: 3,
//     name: 'product3',
//     description: "sample description",
//     price: 4.43,
//     quantity: 0,
//     currency: 'EUR',
//     image: 'images/product-coming-soon.jpg',
//     url: 'https://onceuponaspice.com/2014/04/13/coffee-o-caffe-making-sense-of-it-all/'
//   },
//   {
//     id: 4,
//     name: 'product4',
//     description: "sample description",
//     price: 345.3,
//     quantity: 51,
//     currency: 'EUR',
//     image: 'images/product-coming-soon.jpg',
//     url: 'https://onceuponaspice.com/2014/04/13/coffee-o-caffe-making-sense-of-it-all/'
//   },
//   {
//     id: 5,
//     name: 'product5',
//     description: "sample description",
//     price: 4434.34,
//     quantity: 1,
//     currency: 'EUR',
//     image: 'images/product-coming-soon.jpg',
//     url: 'https://onceuponaspice.com/2014/04/13/coffee-o-caffe-making-sense-of-it-all/'
//   },
//   {
//     id: 6,
//     name: 'product6',
//     description: "sample description",
//     price: 67.0,
//     quantity: 12,
//     currency: 'EUR',
//     image: 'images/product-coming-soon.jpg',
//     url: 'https://onceuponaspice.com/2014/04/13/coffee-o-caffe-making-sense-of-it-all/'
//   },
//   {
//     id: 7,
//     name: 'product7',
//     description: "sample description",
//     price: 4.49,
//     quantity: 2,
//     currency: 'EUR',
//     image: 'images/product-coming-soon.jpg',
//     url: 'https://onceuponaspice.com/2014/04/13/coffee-o-caffe-making-sense-of-it-all/'
//   },
//   {
//     id: 8,
//     name: 'product8',
//     description: "sample description",
//     price: 3.49,
//     quantity: 4,
//     currency: 'EUR',
//     image: 'images/product-coming-soon.jpg',
//     url: 'https://onceuponaspice.com/2014/04/13/coffee-o-caffe-making-sense-of-it-all/'
//   }
// ];
//
// export default data;
