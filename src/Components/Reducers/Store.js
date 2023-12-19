import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './store/userReducer';    
import { loginReducer } from './features/login/loginReducer';


const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null;

export const Store = configureStore({
    reducer: {

        user: userReducer,
        userLogin : loginReducer
    },
    preloadedState: {
        userLogin: { userInfo: userInfoFromStorage } //preload localStorage infos
    }
});
