import { connect } from 'react-redux';
import Cart from '../components/Cart';
import { getItems, getCurrency, getTotal } from '../ducks/cart';

const mapStateToProps = (state, props) => {
    return {
        items: getItems(state, props),
        currency: getCurrency(state, props),
        total: getTotal(state, props)
    }
}

export default connect(mapStateToProps)(Cart);


// connect: <-- connect takes the above mapStateToProps and mapDispatchToProps and makes a component aware of the store data
// mapStateToProps: <-- takes a piece from the application's store-state and passes it in to the component as a property. The returned value is accessed later as this.props.{value_name}, from the !connected! component
