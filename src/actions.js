export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const AUTHENTICATE = 'AUTHENTICATE';
export const REGISTRATION = "REGISTRATION";
export const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";

export const logIn = (nick) => ({
    type: LOG_IN,
    payload: {nick},
});
export const logOut = () => ({type: LOG_OUT});

export const authenticate = (email, password, nick) => ({
    type: AUTHENTICATE, 
    payload: {email, password, nick}
});

export const registration = (email, password, name, surname) => ({
    type: REGISTRATION,
    payload: { email, password, name, surname }
});

export const registrationSuccess = (
    email,
    password,
    name,
    surname
) => ({
    type: REGISTRATION_SUCCESS,
    payload: { email, password, name, surname }
});

