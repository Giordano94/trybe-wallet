// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_DATA_API } from '../actions';

const INITIAL_STATE_WALLET = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const userWalletReducer = (state = INITIAL_STATE_WALLET, action) => {
  switch (action.type) {
  case GET_DATA_API:
    return {
      ...state,
      currencies: Object.keys(action.payload).filter((currency) => currency !== 'USDT'),
    };
  default:
    return state;
  }
};

export default userWalletReducer;
