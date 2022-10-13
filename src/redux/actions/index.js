export const GET_USER_EMAIL = 'GET_USER_EMAIL';
export const GET_DATA_API = 'GET_DATA_API';
export const GET_EXPENSES_DATA = 'GET_EXPENSES_DATA';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const getUserEmail = (userEmail) => ({
  type: GET_USER_EMAIL,
  userEmail,
});

export const dataApi = (payload) => ({ type: GET_DATA_API, payload });

export const getExpensesData = (expenses) => ({
  type: GET_EXPENSES_DATA,
  expenses,
});

export const deleteExpense = (id) => ({
  type: DELETE_EXPENSE,
  id,
});

export function getRequest() {
  return async (dispatch) => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    return dispatch(dataApi(data));
  };
}
