const initialState = { loading: false, success: false, error: null };

//handle the user profile update request
export const userProfileUpdateReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_USER_PROFILE_REQUEST':
            return { loading: true };

        //in the case of a successful update, update the user profile and not loading anymore
        case 'UPDATE_USER_PROFILE_SUCCESS':
            return { loading: false, success: true, userInfo: action.payload };
        case 'UPDATE_USER_PROFILE_FAILURE':
            return { loading: false, error: action.payload };
            
        //reset the success flag
        case 'RESET_UPDATE_USER_PROFILE_SUCCESS':
            return { ...state, success: false };
        default:
            return state;
    }
};