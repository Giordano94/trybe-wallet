import { GET_DATA_API, GET_EXPENSES_DATA } from '../actions';

const INITIAL_STATE_WALLET = {
  currencies: [],
  expenses: [],
};

const userWalletReducer = (state = INITIAL_STATE_WALLET, action) => {
  switch (action.type) {
  case GET_DATA_API:
    return {
      ...state,
      currencies: Object.keys(action.payload).filter(
        (currency) => currency !== 'USDT',
      ),
    };
  case GET_EXPENSES_DATA:
    return {
      ...state,
      expenses: [...state.expenses, action.expenses],
    };
  default:
    return state;
  }
};

export default userWalletReducer;
