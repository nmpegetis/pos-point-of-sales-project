import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {createPayment} from '../../actions'

let initialState = {
    amount: 0,
    cardNumber: '',
    cardBrand: '',
    expMonth: '',
    expYear: '',
    cardHolder: '',
    cvv: '',
    errors: {}
};

class NewPayment extends React.Component {

    constructor(props) {
        super(props);
        this.state = initialState;
    }

    handleChange = (e) => {
        this.setState({ [e.target.name] : e.target.value })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const {
            amount,
            cardNumber,
            cardBrand,
            expMonth,
            expYear,
            cardHolder,
            cvv
        } = this.state;


        let errors = {};
        if (amount === '') errors.amount = "Can't be empty";
        if (cardNumber === '') errors.cardNumber = "Can't be empty";
        if (cardBrand === '') errors.cardBrand = "Can't be empty";
        if (expMonth === '') errors.expMonth = "Can't be empty";
        if (expYear === '') errors.expYear = "Can't be empty";
        if (cardHolder === '') errors.cardHolder = "Can't be empty";
        if (cvv === '') errors.cvv = "Can't be empty";

        this.setState({errors});

        const isValid = Object.keys(errors).length === 0;

        if (isValid) {
            this.props.createPayment(
                parseInt(amount, 10),
                cardNumber,
                cardBrand,
                parseInt(expMonth, 10),
                parseInt(expYear, 10),
                cardHolder,
                cvv
            );
            this.clear()
        }
    };

    handleClear = (e) => {
        e.preventDefault();
        this.clear()
    };

    clear = () => {
        this.setState(initialState);
    };

    render() {
        return(
            <form className="form payment" ref="newPayment" onSubmit={this.handleSubmit}>
                <h3 className="header">Payment</h3>
                <div className="panel panel-default">
                    <div className="panel-body">
                        <div className="form-group">
                            <label>Amount</label>
                            <input
                                name="amount"
                                value={this.state.amount}
                                className="form-control"
                                onChange={this.handleChange}
                                id="amount"
                            />
                            <span className="text-danger">{this.state.errors.amount}</span>
                        </div>
                        <div className="form-group">
                            <label>Card Number</label>
                            <input
                                name="cardNumber"
                                value={this.state.cardNumber}
                                className="form-control"
                                onChange={this.handleChange}
                                id="cardNumber"
                                placeholder="xxxx xxxx xxxx xxxx"
                            />
                            <span className="text-danger">{this.state.errors.cardNumber}</span>
                        </div>
                        <div className="form-group">
                            <label>Card Brand</label>
                            <input
                                name="cardBrand"
                                value={this.state.cardBrand}
                                className="form-control"
                                onChange={this.handleChange}
                                id="cardBrand"
                                placeholder="VISA"
                            />
                            <span className="text-danger">{this.state.errors.cardBrand}</span>
                        </div>
                        <div>
                            <label>Valid Thru</label>
                            <div className="form-group row">
                                <div className="col-xs-3">
                                    <input
                                        name="expMonth"
                                        value={this.state.expMonth}
                                        className="form-control"
                                        onChange={this.handleChange}
                                        id="expMonth"
                                        placeholder="MM"
                                    />
                                    <span className="text-danger">{this.state.errors.expMonth}</span>
                                </div>
                                <div className="col-xs-1">
                                    /
                                </div>
                                <div className="col-xs-3">
                                    <input
                                        name="expYear"
                                        value={this.state.expYear}
                                        className="form-control"
                                        onChange={this.handleChange}
                                        id="expYear"
                                        placeholder="YY"
                                    />
                                    <span className="text-danger">{this.state.errors.expYear}</span>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Card Holder Name</label>
                            <input
                                name="cardHolder"
                                value={this.state.cardHolder}
                                className="form-control"
                                onChange={this.handleChange}
                                id="cardHolder"
                                placeholder="George Papadopoulos"
                            />
                            <span className="text-danger">{this.state.errors.cardHolder}</span>
                        </div>
                        <div>
                            <label>Security Code (CVV)</label>
                            <div className="form-group row">
                                <div className="col-xs-3">
                                    <input
                                        name="cvv"
                                        value={this.state.cvv}
                                        className="form-control"
                                        onChange={this.handleChange}
                                        id="cvv"
                                        placeholder="XXX"
                                    />
                                    <span className="text-danger">{this.state.errors.cvv}</span>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <hr/>
                            <div className="btn-toolbar">
                                <div className="col-xs-6">
                                    <button className="btn btn-block" onClick={this.handleClear}>Clear</button>
                                </div>
                                <div className="col-xs-6">
                                    <input className="btn btn-block btn-primary payment__button_right" type="submit" value="Charge" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

NewPayment.propTypes = {
    total: PropTypes.number
};

export default connect(null, {createPayment})(NewPayment);