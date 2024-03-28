import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Logout } from '../Reducers/features/logout/Logout'

import argentBankLogo from '../../Images/argentBankLogo.png'

export const Header = () => {

  const logoutDispatch = useDispatch();

  //gonna need the current location of the user for the path in the header
  const location = useLocation(); 
  const { userInfo } = useSelector(state => state.userLogin);
  const {profile,error} = useSelector(state => state.user);

  const isUserLoggedIn = !!userInfo;

  const isHomePage = location.pathname === '/' || location.pathname === '/userProfile' || location.pathname === '/transactions';

  

  //if the user is logged in, the header will display the dashboard link and the sign out link
  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    sessionStorage.removeItem('userInfo');
    logoutDispatch(Logout());
  };

  return (
    <nav className="main-nav">
    <Link className="main-nav-logo" to="/">
      <img
        className="main-nav-logo-image"
        src={argentBankLogo}
        alt="Argent Bank Logo"
        aria
      />
      <h1 className="sr-only">Argent Bank</h1>
    </Link>
    <div className="main-items">
          {isUserLoggedIn ? (
            <>
            {/* ajout du profil de l'utilisateur */}
            {profile.userName && (<p className="nav-username " aria-hidden="true">{profile.userName}</p>)}
              {isHomePage && (
                  <Link to="/userDashboard" className='main-nav-item' aria-label="Dashboard">
                    <i className="fa fa-user-circle" aria-hidden="true"></i>Dashboard
                  </Link>
                  )}
                  <Link to="/" onClick={handleLogout} className='main-nav-item' aria-label="Sign Out">
                    <i className="fa fa-user-circle" aria-hidden="true"></i> Sign Out
                  </Link>
            </>
            ) : (
                  <Link to='/signIn' className='main-nav-item' aria-label="Sign In">
                    <i className="fa fa-user-circle" aria-hidden="true"></i> Sign In
                  </Link>
            )}
    </div>
  </nav>
  )
}