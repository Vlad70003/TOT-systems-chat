import { LOG_IN, LOG_OUT, REGISTRATION_SUCCESS } from '../actions.js';

const initialState = {
    isLoggedIn: false,
    registration: false,
}

export default function auth(state = initialState, action){
	switch(action.type) {

  	case LOG_IN: {
    return {
      ...state, 
      isLoggedIn: true,
    }
    }
    case LOG_OUT: {
    return {
      ...state, 
      isLoggedIn: false, 
    }
    }
    case REGISTRATION_SUCCESS: {
      return {
        ...state, 
        registration: true
      }
    }

    default: 
    return state;
  }
}