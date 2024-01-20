import axios from 'axios';
import { apiPath } from '../../apiPaths';

export const GET_USER_PROFILE_REQUEST = 'GET_USER_PROFILE_REQUEST';
export const GET_USER_PROFILE_SUCCESS = 'GET_USER_PROFILE_SUCCESS';
export const GET_USER_PROFILE_FAILURE = 'GET_USER_PROFILE_FAILURE';

export const GetUser = () => async (dispatch) => {

  try {
    
    dispatch({ type: GET_USER_PROFILE_REQUEST });

    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const token = userInfo?.token;

    console.log('userInfo:', userInfo);
    console.log('Token:', token);
    
    if(!token) {
        console.error('Oh le token dans le local Storage là');
        return;
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };

    const {data}  = await axios.post(`${apiPath}/profile`, {} ,config);

    console.log('User profile data received:', data.body);
    
    dispatch({
      type: GET_USER_PROFILE_SUCCESS,
      payload: data.body,
    });


  } catch (error) {
    console.error('Error fetching user profile:', error);
    dispatch({
      type: GET_USER_PROFILE_FAILURE,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};
