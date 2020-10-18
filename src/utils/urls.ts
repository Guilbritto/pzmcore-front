export const BASE_URL = process.env.REACT_APP_BASE_URL;
//Login
export const LOGIN = `${BASE_URL}/sessions`;
export const FORGOT_PASSWORD = `${BASE_URL}/sessions/forgot`
export const FORGOT_PASSWORD_VALIDATE = `${BASE_URL}/sessions/forgot/validate`
export const FORGOT_PASSWORD_CHANGE = `${BASE_URL}/sessions/forgot/change`

//SIGNUP
export const SIGNUP = `${BASE_URL}/user`;