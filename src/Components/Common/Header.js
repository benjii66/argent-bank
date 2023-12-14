import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import argentBankLogo from '../../Images/argentBankLogo.png'

export const Header = () => {
  const userLocation = useLocation();

  const isUserDashboard = userLocation.pathname === '/userDashboard';
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
        <Link to='/signIn' className='main-nav-item'>
          {/* signout si loggé mais à faire dans la partie 3  */}
        <i className="fa fa-user-circle"></i>
           {isUserDashboard ? 'Sign Out' : 'Sign In'}
        </Link>
    </div>
  </nav>
  )
}

 