import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GetUser } from './GetUser';
import { Link } from 'react-router-dom';



export const User = () => {

  const dispatch = useDispatch();
  const {profile, loading, error} = useSelector(state => state.user);
  
  console.log("profile : ", profile.userName);

    useEffect(() => {
        dispatch(GetUser());
    }, [dispatch]);

  if (error) return <Link to="/" className='main-nav-item'>Non connecté...</Link >;

  
  return (
    <>
      <div className="header">
        <h1>Welcome back<br />{profile.userName} !</h1>
       <Link to="/userProfile" className='main-nav-item'>
        <button className="edit-button">Edit Name</button></Link >
      </div>
      <h2 className="sr-only">Accounts</h2>      
    </>
    
  );
};