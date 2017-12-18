import { connect } from 'react-redux';
import NewPayment from '../components/Payment';
import { getTotal } from '../ducks/cart';

const mapStateToProps = (state, props) => {
    return {
        total: getTotal(state, props)
    }
};

export default connect(mapStateToProps)(NewPayment);


// connect: <-- connect takes the above mapStateToProps and mapDispatchToProps and makes a component aware of the store data
// mapStateToProps: <-- takes a piece from the application's store-state and passes it in to the component as a property. The returned value is accessed later as this.props.{value_name}, from the !connected! component