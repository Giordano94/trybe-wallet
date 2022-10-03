export const GET_USER_EMAIL = 'GET_USER_EMAIL';
export const GET_DATA_API = 'GET_DATA_API';

export const getUserEmail = (userEmail) => ({
  type: GET_USER_EMAIL,
  userEmail,
});

export const dataApi = (payload) => ({ type: GET_DATA_API, payload });

export function getRequest() {
  return async (dispatch) => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    // console.log(data);
    return dispatch(dataApi(data));
  };
}
