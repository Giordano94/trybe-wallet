import { GET_USER_EMAIL } from '../actions';

const INITIAL_STATE_EMAIL = {
  email: '',
};

const userEmailReducer = (state = INITIAL_STATE_EMAIL, action) => {
  switch (action.type) {
  case GET_USER_EMAIL:
    return {
      ...state,
      email: action.userEmail,
    };
  default:
    return state;
  }
};

export default userEmailReducer;
