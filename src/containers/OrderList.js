import { connect } from 'react-redux'
import OrderListComponent from '../components/Order/OrderList'

const mapStateToProps = (state) => {
    return {
        payments: state.payments
    }
};

const OrderList = connect(mapStateToProps)(OrderListComponent);

export default OrderList