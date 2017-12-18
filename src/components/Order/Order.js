import React from 'react';
import PropTypes from 'prop-types'


const Payment = ({id, status, amount, cardHolder, cardNumber, cardBrand, expMonth, expYear}) => (
    <div className="card">
        <div className="content">
            <div className="right floated"><span className="ui green right ribbon label">{status}</span></div>
            <div>R$ {amount}</div>
            <div className="meta">{id}</div>
        </div>
        <div className="content">
            <div>
                <div className="right floated">{cardBrand}</div>
                {cardNumber} <br />
                {cardHolder} <br />
                {expMonth}/{expYear} <br />
            </div>
        </div>
        <div className="extra content">
            <div className="ui two buttons">
                <div className="ui basic green button">Capture</div>
                <div className="ui basic red button">Void</div>
            </div>
        </div>
    </div>
);

Payment.propTypes = {
    id: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    cardHolder: PropTypes.string.isRequired,
    cardNumber: PropTypes.string.isRequired,
    cardBrand: PropTypes.string.isRequired,
    expMonth: PropTypes.number.isRequired,
    expYear: PropTypes.number.isRequired
};

export default Payment;