import { connect } from 'react-redux';
import ProductList from '../components/ProductList';
import { getProducts } from '../ducks/products';

const mapStateToProps = (state, props) => {
    return {
        products: getProducts(state, props)
    }
};

export default connect(mapStateToProps)(ProductList);

// connect: <-- connect takes the above mapStateToProps and mapDispatchToProps and makes a component aware of the store data
// mapStateToProps: <-- takes a piece from the application's store-state and passes it in to the component as a property. The returned value is accessed later as this.props.{value_name}, from the !connected! component