import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Login } from '../Reducers/features/login/Login';
import { GetUser } from '../Reducers/features/user/GetUser';

import Button from '../Common/Button';




export const SignInForm = () => {
    const [informations, setInformations] = useState({ email: '', password: '' });
    const [rememberMe, setRememberMe] = useState(false); 
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userLogin = useSelector(state => state.userLogin); //get the login state from the Redux store
    const { userInfo, error } = userLogin; //destructure the userInfo and error from the login state

    const[errorMessage, setErrorMessage] = useState('');


   
    //redirection to the user dashboard if the user is logged in
    useEffect(() => {
        if (userInfo) {
            dispatch(GetUser());
            navigate('/userDashboard');
        }
    }, [userInfo,dispatch, navigate]);

    //handle the error messages
    useEffect(() => {
        if (error) {
            if (error.includes("email")) {
                setErrorMessage("Email invalide"); 
            } else if (error.includes("password")) {
                setErrorMessage("Mot de passe incorrect"); 
            } else {
                setErrorMessage("Erreur lors de la connexion"); 
            }
    
            const timer = setTimeout(() => {
                setErrorMessage('');
            }, 3000);
    
            return () => clearTimeout(timer);
        }
    }, [error]);

    //handle the input changes, if the checkbox is checked and the form submission
    const handleChange = (connexionInfo) => {
        setInformations({ ...informations, [connexionInfo.target.id]: connexionInfo.target.value });
    };

    const handleRememberMe = (rememberInfo) => {
        setRememberMe(rememberInfo.target.checked);
    };

    const handleSubmit = (formInfo) => {
        formInfo.preventDefault();

        //if a field is empty we return an error message
        if (!informations.email.trim() || !informations.password.trim()) {
            setErrorMessage("Veuillez remplir tous les champs");
            const timer = setTimeout(() => {
                setErrorMessage('');
            }, 3000);
            return () => clearTimeout(timer); 
        }     
        
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
            {errorMessage && <p className="error" style={{color: 'red'}} aria-live="assertive">{errorMessage}</p>}
                <Button 
                    title= "Sign In" 
                    style="sign-in-button"
                    type="submit"             
                />
        </form>
    );
};