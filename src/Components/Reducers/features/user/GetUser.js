import axios from 'axios';
import { apiPath } from '../../apiPaths';

// Types d'actions
export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

export const GetUser = () => {
    return async dispatch => {
        dispatch({ type: FETCH_USERS_REQUEST });
        try {
            const token = localStorage.getItem('token'); // get the token from localStorage
            const response = await axios.get(`${apiPath}/user/profile`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            dispatch({ type: FETCH_USERS_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: FETCH_USERS_FAILURE, payload: error });
        }
    };
};