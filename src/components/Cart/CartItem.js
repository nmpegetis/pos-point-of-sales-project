import React from 'react';
import PropTypes from 'prop-types'


const CartItem = ({ name, price, quantity }) => {
    return (
        <div className="cart-item">
            <span className="cart-item__name">{name}</span>
            <code><span className="cart-item__name">{quantity}</span></code>
            <span className="cart-item__price">{price} EUR</span>
        </div>
    );
};

CartItem.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string,
    quantity: PropTypes.number.isRequired
};

export default CartItem;

// render: <-- render takes each time the component properties and renders in UI accordingly
// propTypes: <-- sets acceptable types of properties and if they empty properties are permitted or not.