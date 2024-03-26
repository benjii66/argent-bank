import axios from 'axios'
import { apiPath } from '../../apiPaths'

export const UPDATE_USER_PROFILE_REQUEST = 'UPDATE_USER_PROFILE_REQUEST'
export const UPDATE_USER_PROFILE_SUCCESS = 'UPDATE_USER_PROFILE_SUCCESS'
export const UPDATE_USER_PROFILE_FAILURE = 'UPDATE_USER_PROFILE_FAILURE'
export const RESET_UPDATE_USER_PROFILE_SUCCESS = 'RESET_UPDATE_USER_PROFILE_SUCCESS'

export const updateUserProfile = (userData) => async (dispatch) => {

try {
  //get the user information
  const userInfo = JSON.parse(localStorage.getItem('userInfo')) 
  || JSON.parse(sessionStorage.getItem('userInfo'));

  const userName = userInfo.userName;

  //let's start the process !
    dispatch({ type: UPDATE_USER_PROFILE_REQUEST })

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`, //add the user token
      },
    };

    //put request to update the user profile
    const { data } = await axios.put(`${apiPath}/profile`, userData, config);
    
    //if success, update the user profile
    dispatch({
      type: UPDATE_USER_PROFILE_SUCCESS,
      payload: data.userName,
    });

    //update the user profile in the local storage or session storage
    localStorage.setItem('userInfo', JSON.stringify({ ...userInfo, userName: data.userName })) 
    || sessionStorage.setItem('userInfo', JSON.stringify({ ...userInfo, userName: data.userName }));

  } catch (error) {
    console.error("Error updating user profile:", error);
    //otherwise, well it's an error
    dispatch({
      type: UPDATE_USER_PROFILE_FAILURE,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};