export const GET_USER_EMAIL = 'GET_USER_EMAIL';

export const getUserEmail = (userEmail) => ({
  type: GET_USER_EMAIL,
  userEmail,
});
