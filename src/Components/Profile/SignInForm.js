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

    const[errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (userInfo) {
            dispatch(GetUser());
            navigate('/userDashboard');
        }
    }, [userInfo,dispatch, navigate]);

    useEffect(() => {
        if (error) {
            if(error.includes("email"))
                setErrorMessage("Email invalide");
            else if (error.includes("password"))
                setErrorMessage("Mot de passe incorrect");
            else 
                setErrorMessage("Erreur lors de la connexion");
        }
    }, [error]);

    const handleChange = (connexionInfo) => {
        setInformations({ ...informations, [connexionInfo.target.id]: connexionInfo.target.value });
    };

    const handleRememberMe = (rememberInfo) => {
        setRememberMe(rememberInfo.target.checked);
    };

    const handleSubmit = (formInfo) => {
        formInfo.preventDefault();
        dispatch(Login({...informations, rememberMe}));
        setErrorMessage('');
    };


    

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" value={informations.email} onChange={handleChange} />
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={informations.password} onChange={handleChange} />
            </div>
            <div className="input-remember">
                <input type="checkbox" id="remember-me" onChange={handleRememberMe} />
                <label htmlFor="remember-me">Remember me</label>
            </div>
            {errorMessage && <p className="error" style={{color: 'red'}}>{errorMessage}</p>}
            <button type="submit" className="sign-in-button">Sign In</button>
        </form>
    );
};