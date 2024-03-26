import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile } from '../Reducers/features/user/updateUserProfile';
import { GetUser } from '../Reducers/features/user/GetUser';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Button from '../Common/Button';


export const UpdateUserProfileForm = () => {

    //hooks to navigate and dispatch actions
    const navigate = useNavigate();
    const dispatch = useDispatch();

    //select the user profile from the Redux store
    const { profile, loading } = useSelector(state => state.user);
    const success = useSelector(state => state.userProfileUpdate.success);

    //local state to store the username
    const [username, setUsername] = useState(profile?.userName || '');


    //local state to store the success and error messages
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    //get the user information when the component is mounted
    useEffect(() => {dispatch(GetUser());} , [dispatch]);


    useEffect(() => {
        if (success) {
            setSuccessMessage("Profil mis à jour avec succès!"); // congrats it'll be updated
            
            //redirect to the user dashboard after 2 seconds and 
            //reset the success state to allow the user to comeback directly without refreshing the page
            setTimeout(() => {
                navigate("/userDashboard");
                dispatch({type: 'RESET_UPDATE_USER_PROFILE_SUCCESS'});
            }, 2000); 
        }
    }, [success, navigate, dispatch, username]);

    //effect to display the new username when the profile is updated
    useEffect(() => {setUsername(profile?.userName || ''); }, [profile])

    const handleUsernameChange = (event) =>setUsername(event.target.value);    

    //handle the form submission to update the user profile
    const handleSubmit = (event) => {
        event.preventDefault();
        if(!username.trim()) {
            setErrorMessage('Veuillez remplir le champ');
            return;
        }
        dispatch(updateUserProfile({userName: username})); //send the new username to the server
        setErrorMessage('');
    };

    const handleCancel = () => setUsername(profile.userName || '');//if the user wants to cancel the update

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