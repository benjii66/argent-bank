import { configureStore } from '@reduxjs/toolkit';
import { UserReducer } from './features/user/UserReducer';    
import { loginReducer } from './features/login/loginReducer';
import { userProfileUpdateReducer } from './features/user/UpdateUserReducer';


// get the user information from a storage (local or session)
const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
        : sessionStorage.getItem('userInfo')
            ? JSON.parse(sessionStorage.getItem('userInfo'))
    : null;

export const Store = configureStore({
    reducer: {
        // handle the user information
        user: UserReducer,

        // handle the user login process 
        userLogin : loginReducer,
        
        // handle the profile update process
        userProfileUpdate: userProfileUpdateReducer
    },
    // use a preload state to load the user information
    preloadedState: {
        userLogin: { userInfo: userInfoFromStorage }
    }
});