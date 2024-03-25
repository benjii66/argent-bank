import { configureStore } from '@reduxjs/toolkit';
import { UserReducer } from './features/user/UserReducer';    
import { loginReducer } from './features/login/loginReducer';
import { userProfileUpdateReducer } from './features/user/UpdateUserReducer';

const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
        : sessionStorage.getItem('userInfo')
            ? JSON.parse(sessionStorage.getItem('userInfo'))
    : null;

export const Store = configureStore({
    reducer: {
        user: UserReducer,
        userLogin : loginReducer,
        userProfileUpdate: userProfileUpdateReducer
    },
    preloadedState: {
        userLogin: { userInfo: userInfoFromStorage }
    }
});