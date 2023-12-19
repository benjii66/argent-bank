import axios from 'axios';
import { apiPath } from '../../apiPaths';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const Login = (credentials) => {
    return dispatch => {
        console.log('Dispatching Login with credentials:', credentials);
        dispatch({ type: LOGIN_REQUEST });
        axios.post(`${apiPath}/login`, credentials, {
            
            headers: {
                'Content-Type': 'application/json'
            }        
        })
            .then(response => {
                console.log('Login successful:', response.data);
                localStorage.setItem('userInfo', JSON.stringify(response.data));
                dispatch({ type: LOGIN_SUCCESS, payload: response.data });
            })
            .catch(error => {
                console.error('Error response:', error.response.data);
            });
    };
};