import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'

import { Logout } from '../Reducers/features/logout/Logout'

import argentBankLogo from '../../Images/argentBankLogo.png'

export const Header = () => {

  const logoutDispatch = useDispatch();

  const location = useLocation();
  const { userInfo } = useSelector(state => state.userLogin);
  const isUserLoggedIn = !!userInfo;
  const isHomePage = location.pathname === '/' || location.pathname === '/userProfile' || location.pathname === '/transactions';

  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    logoutDispatch(Logout());
  };

  return (
    <nav className="main-nav">
    <Link className="main-nav-logo" to="/">
      <img
        className="main-nav-logo-image"
        src={argentBankLogo}
        alt="Argent Bank Logo"
      />
      <h1 className="sr-only">Argent Bank</h1>
    </Link>
    <div>
          {isUserLoggedIn ? (
            <>
              {isHomePage && (
                  <Link to="/userDashboard" className='main-nav-item'>
                    <i className="fa fa-user-circle"></i>Dashboard
                  </Link>
              )}
                  <Link to="/" onClick={handleLogout} className='main-nav-item'>
                    <i className="fa fa-user-circle"></i> Sign Out
                  </Link>
            </>
            ) : (
                  <Link to='/signIn' className='main-nav-item'>
                    <i className="fa fa-user-circle"></i> Sign In
                  </Link>
            )}
    </div>
  </nav>
  )
}