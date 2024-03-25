import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile } from '../Reducers/features/user/updateUserProfile';
import { GetUser } from '../Reducers/features/user/GetUser';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Button from '../Common/Button';


export const UpdateUserProfileForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { profile, loading } = useSelector(state => state.user);
    const success = useSelector(state => state.userProfileUpdate.success);

    const [username, setUsername] = useState(profile?.userName || '');

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    console.log("pseudo du profil", profile?.userName);

    useEffect(() => {dispatch(GetUser());} , [dispatch]);


    useEffect(() => {
        if (success) {
            setSuccessMessage("Profil mis à jour avec succès!");
            setTimeout(() => {
                navigate("/userDashboard");
                dispatch({type: 'RESET_UPDATE_USER_PROFILE_SUCCESS'});
            }, 2000); 
        }
    }, [success, navigate, dispatch, username]);


    useEffect(() => {setUsername(profile?.userName || ''); }, [profile])

    const handleUsernameChange = (event) =>setUsername(event.target.value);    

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

    const handleCancel = () => setUsername(profile.userName || '');

    return (
        <>
            {successMessage && <div className="success-message" aria-live="polite">{successMessage}</div>}
            {errorMessage && <div className="error-message" style={{color : 'red'}} aria-live="assertive">{errorMessage}</div>}
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
                        <Button 
                            title={loading ? 'Chargement...' : 'Modifier'}
                            style="edit-button"
                            type="submit"
                            disabledStyle={loading}
                        />                
                        <Link to="/userDashboard">
                            <Button 
                                title="Annuler"
                                style="edit-button"
                                type="button"
                                onClickStyle={handleCancel}
                            />
                        </Link>
                </form>
        </>
    );
};