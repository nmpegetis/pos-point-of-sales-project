import { combineReducers } from 'redux'

const payment = (state = {}, action) => {
    switch(action.type) {
        case "CREATE_PAYMENT":
            const {
                id,
                status,
                amount,
                cardNumber,
                cardBrand,
                expMonth,
                expYear,
                cardHolder,
                cvv
            } = action;

            return {
                id,
                status,
                amount,
                cardNumber,
                cardBrand,
                expMonth,
                expYear,
                cardHolder,
                cvv
            };
        default:
            return state;
    }
};

function payments(state = [], action) {
    console.log(action);

    switch(action.type) {
        case "CREATE_PAYMENT":
            return [
                ...state,
                payment(undefined, action)
            ];
        default:
            return state;
    }
}

const posApp = combineReducers({
    payments
});

export default posApp;