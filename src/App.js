import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  

import {Home} from './Pages/Home';
import {SignIn} from './Pages/SignIn';
import {UserDashboard} from './Pages/UserDashboard';
import {UserProfile} from './Pages/UserProfile';

import {Header} from './Components/Common/Header';
import {Footer} from './Components/Common/Footer';


function App() {
  return (
   <Router>
    <div className='App'>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/userDashboard" element={<UserDashboard />} />
          <Route path="/userProfile" element={<UserProfile />} />
        </Routes>
      </main>
      <Footer/>
    </div>
   </Router>
  );
}

export default App;
