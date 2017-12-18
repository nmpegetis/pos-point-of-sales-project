import React from 'react';
import PropTypes from 'prop-types'
import CartItem from './CartItem';
import cart from '../../ducks/cart';

const Cart = ({ items, total }) => {
    return (
        <div>
            <h3>New Order</h3>

            <div className="cart">
                <div className="panel panel-default">
                    <div className="panel-body">
                        {items.length > 0 && (
                            <ol>
                                {items.map(item => (
                                  <li key={item.id}>
                                    <CartItem {...item} />
                                  </li>
                                ))}
                            </ol>
                        )}
                        {items.length === 0 && (
                            <div className="alert alert-info">Cart is empty</div>
                        )}
                        <div className="col-xs-6">
                            <button
                                className="btn btn-block btn-danger no_button"
                            >Clear</button>
                        </div>
                        <div className="cart__total">Total: {total} EUR</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Cart.propTypes = {
    items: PropTypes.array,
    total: PropTypes.number,
    currency: PropTypes.string,
};

export default Cart;
