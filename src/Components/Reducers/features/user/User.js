import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GetUser } from './GetUser';
import { Link } from 'react-router-dom';
import Button from '../../../Common/Button';

export const User = () => {

  const dispatch = useDispatch();

  //extract the user profile and the possible error from the state
  const {profile,error} = useSelector(state => state.user);
  
    useEffect(() => {
        dispatch(GetUser());
    }, [dispatch]); //trigger if only the user state is dispatched

  if (error) return <Link to="/" className='main-nav-item'>Non connecté...</Link >;

  
  return (
    <>
      <div className="header">
        <h1>Welcome back<br />{profile.userName} !</h1>
          <Link to="/userProfile" className='main-nav-item'>
              <Button 
                title= "Edit Name"
                style ="edit-button"
              />
          </Link >
      </div>
        <h2 className="sr-only">Accounts</h2>      
    </>
    
  );
};