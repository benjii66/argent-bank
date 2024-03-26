import axios from 'axios';
import { apiPath } from '../../apiPaths';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const Login = (credentials) => {
    return dispatch => {

        dispatch({ type: LOGIN_REQUEST }); // trigger the login request by the user
        
        //send the user credentials/information to the server
        axios.post(`${apiPath}/login`, credentials, {
            headers: {'Content-Type': 'application/json'}        
        })
            .then(response => {

                //if the user is logged in, get the token
                const token = response.data.body.token;

                //if remember me is checked, store the token in the local storage
                if (credentials.rememberMe) 
                    localStorage.setItem('userInfo', JSON.stringify({token: token}));

                //otherwise, store the token in the session storage
                   sessionStorage.setItem('userInfo', JSON.stringify({token: token}));

                //in the end the user is successfully logged in
                dispatch({ type: LOGIN_SUCCESS, payload: response.data.body });
            })
            .catch(error => {
                //otherwise it's an error
                console.error('Error response:', error.response.data);
                dispatch({ type: LOGIN_FAILURE, payload: error.response.data.message });
            });
    };
};