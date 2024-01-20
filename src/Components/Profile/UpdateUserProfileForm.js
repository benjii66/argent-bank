import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile } from '../Reducers/features/user/updateUserProfile';
import { GetUser } from '../Reducers/features/user/GetUser';
import { Link } from 'react-router-dom';


export const UpdateUserProfileForm = () => {
    const dispatch = useDispatch();
    const { profile, loading, error } = useSelector(state => state.user);
    const success = useSelector(state => state.userProfileUpdate.success);

    const [username, setUsername] = useState(profile?.userName || '');

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    console.log("pseudo du profil", profile?.userName);

    useEffect(() => {
        dispatch(GetUser());
        if (success) {
            console.log("Pseudo mise à jour", profile.userName);
            setSuccessMessage('Profil mis à jour avec succès!');
            setTimeout(() => {
                setSuccessMessage('');
            }, 5000); 
            dispatch(GetUser());
        }
    }, [success, dispatch]);

    useEffect(() => {
        setUsername(profile?.userName || '');
    }, [profile])

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!username.trim()) {
            setErrorMessage('Veuillez remplir le champ');
            return;
        }
        console.log("Pseudo envoyé : ", username);
        dispatch(updateUserProfile({userName: username}));
        setErrorMessage('');
    };

    const handleCancel = () => {
        setUsername(profile.userName || '');
    };

    return (
        <>
            {successMessage && <div className="success-message">{successMessage}</div>}
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <form onSubmit={handleSubmit}>
                <div className="input-wrapper">
                    <label htmlFor="username">Modifier le Pseudo:</label>
                    <input 
                        type="text" 
                        id="username" 
                        placeholder={profile.userName} 
                        onChange={handleUsernameChange} 
                    />
                </div>
                <button type="submit" disabled={loading} className="edit-button">
                    {loading ? 'Chargement...' : 'Modifier'}
                </button>
                <Link to="/userDashboard">
                <button type="button" onClick={handleCancel} className="edit-button">
                    Annuler
                </button>
                </Link>
            </form>
        </>
    );
};