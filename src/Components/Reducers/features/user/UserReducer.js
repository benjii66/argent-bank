// reducers/userReducer.js
import {
    GET_USER_PROFILE_REQUEST,
    GET_USER_PROFILE_SUCCESS,
    GET_USER_PROFILE_FAILURE,
  } from './GetUser';
  
  // Initial state where the user isn't logged in or not trying to log in
  const initialState = {
    profile: {},
    loading: false,
    error: null,
  };
  
  // Reducer function to handle the state of the user
  export const UserReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_USER_PROFILE_REQUEST:
        return { ...state, loading: true };
        
        //add a payload to the action to pass the user profile
      case GET_USER_PROFILE_SUCCESS:
        return { ...state, loading: false, profile: action.payload };
      case GET_USER_PROFILE_FAILURE:
        return {...state, loading: false, error: action.payload };        
      default:
        return state;
    }
  };
  