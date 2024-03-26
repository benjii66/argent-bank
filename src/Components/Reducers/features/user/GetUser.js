import axios from 'axios';
import { apiPath } from '../../apiPaths';

export const GET_USER_PROFILE_REQUEST = 'GET_USER_PROFILE_REQUEST';
export const GET_USER_PROFILE_SUCCESS = 'GET_USER_PROFILE_SUCCESS';
export const GET_USER_PROFILE_FAILURE = 'GET_USER_PROFILE_FAILURE';

export const GetUser = () => async (dispatch) => {

  try {
    
    dispatch({ type: GET_USER_PROFILE_REQUEST });

    //get the user information
    const userInfo = JSON.parse(localStorage.getItem('userInfo')) 
    || JSON.parse(sessionStorage.getItem('userInfo'));

    //get the user token
    const token = userInfo?.token;

     //try the existence of the token
    if(!token) {
        console.error("No Token Found");
        return;
    }

    //request the user profile
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };

    //just a post request to get the user profile
    const {data}  = await axios.post(`${apiPath}/profile`, {} ,config);

    //if success, get the user profile with body content of the data request
    dispatch({
      type: GET_USER_PROFILE_SUCCESS,
      payload: data.body,
    });


  } catch (error) {
    //otherwise, congratulation, it's an error !
    console.error('Error fetching user profile:', error);
    dispatch({
      type: GET_USER_PROFILE_FAILURE,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};
