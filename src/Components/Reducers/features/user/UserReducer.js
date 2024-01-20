// reducers/userReducer.js
import {
    GET_USER_PROFILE_REQUEST,
    GET_USER_PROFILE_SUCCESS,
    GET_USER_PROFILE_FAILURE,
  } from './GetUser';
  
  const initialState = {
    profile: {},
    loading: false,
    error: null,
  };
  
  export const UserReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_USER_PROFILE_REQUEST:
        return { ...state, loading: true };
      case GET_USER_PROFILE_SUCCESS:
        return { ...state, loading: false, profile: action.payload };
      case GET_USER_PROFILE_FAILURE:
        return {...state, loading: false, error: action.payload };        
      default:
        return state;
    }
  };
  