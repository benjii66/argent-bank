const initialState = { loading: false, success: false, error: null };

export const userProfileUpdateReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_USER_PROFILE_REQUEST':
            return { loading: true };
        case 'UPDATE_USER_PROFILE_SUCCESS':
            return { loading: false, success: true, userInfo: action.payload };
        case 'UPDATE_USER_PROFILE_FAILURE':
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};