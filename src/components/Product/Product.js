import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Product extends Component {
    handleClick = () => {
        const { id, addToCart, removeFromCart, isInCart } = this.props;     // component properties

        if (isInCart) {
            removeFromCart(id);
        } else {
            addToCart(id);
        }
    };

    render() {
        const { name, description, price, isInCart } = this.props;    // component properties

        return (
            <div className="product thumbnail">
                <img src='images/product.jpg' alt="product" />
                <div className="caption">
                    <h3>
                        <a href="#">{name}</a>   {/*the source of the image:http://pic.qiantucdn.com/58pic/16/85/72/76T58PICGgk_1024.jpg . Here it could go to the product description details*/}
                    </h3>
                    <h6>
                        {description}
                    </h6>
                    <div className="product__price">{price} EUR</div>
                    <div className="product__button-wrap">
                        <button
                            className={isInCart ? 'btn btn-danger' : 'btn btn-primary'}
                            onClick={this.handleClick}
                        >
                            {isInCart ? 'Remove' : 'Add to cart'}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

Product.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    isInCart: PropTypes.bool.isRequired,
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
};

export default Product;

// render: <-- render takes each time the component properties and renders in UI accordingly
// propTypes: <-- sets acceptable types of properties and if they empty properties are permitted or not.