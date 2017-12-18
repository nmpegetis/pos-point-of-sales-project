import { connect } from 'react-redux';
import Product from '../components/Product';
import { addToCart, removeFromCart, isInCart } from '../ducks/cart';

const mapStateToProps = (state, props) => {
    return {
        isInCart: isInCart(state, props)
    }
};

const mapDispatchToProps = (dispatch) => ({
    addToCart: (id) => dispatch(addToCart(id)),
    removeFromCart: (id) => dispatch(removeFromCart(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);

// connect: <-- connect takes the above mapStateToProps and mapDispatchToProps and makes a component aware of the store data
// mapStateToProps,mapDispatchToProps: <-- takes a piece from the application's store-state and passes it in to the component as a property. The returned value is accessed later as this.props.{value_name}, from the !connected! component