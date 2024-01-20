import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Login } from '../Reducers/features/login/Login';
import { GetUser } from '../Reducers/features/user/GetUser';

export const SignInForm = () => {
    const [informations, setInformations] = useState({ email: '', password: '' });
    const [rememberMe, setRememberMe] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userLogin = useSelector(state => state.userLogin); 
    const { userInfo, error } = userLogin;

    useEffect(() => {
        if (userInfo) {
            dispatch(GetUser());
            navigate('/userDashboard');
        }
    }, [userInfo,dispatch, navigate]);

    const handleChange = (connexionInfo) => {
        setInformations({ ...informations, [connexionInfo.target.id]: connexionInfo.target.value });
    };

    const handleRememberMe = (rememberInfo) => {
        setRememberMe(rememberInfo.target.checked);
    };

    const handleSubmit = (formInfo) => {
        formInfo.preventDefault();
        dispatch(Login(informations));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" onChange={handleChange} />
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={handleChange} />
            </div>
            <div className="input-remember">
                <input type="checkbox" id="remember-me" onChange={handleRememberMe} />
                <label htmlFor="remember-me">Remember me</label>
            </div>
            {error && <p className="error">Erreur : {error.message}</p>}
            <button type="submit" className="sign-in-button">Sign In</button>
        </form>
    );
};