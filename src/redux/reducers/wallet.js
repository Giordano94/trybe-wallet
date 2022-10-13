import { GET_DATA_API, GET_EXPENSES_DATA, DELETE_EXPENSE } from "../actions";

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
          (currency) => currency !== "USDT"
        ),
      };
    case GET_EXPENSES_DATA:
      return {
        ...state,
        expenses: [...state.expenses, action.expenses],
      };
    case DELETE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.filter((e) => e.id !== action.id),
      };
    default:
      return state;
  }
};

export default userWalletReducer;
