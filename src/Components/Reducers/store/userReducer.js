const initialState = {
    loading: false,
    userInfo: null,
    error: null
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_USERS_REQUEST':
            return {
                ...state,
                loading: true
            };
        case 'FETCH_USERS_SUCCESS':
            return {
                ...state,
                loading: false,
                userInfo: action.payload
            };
        case 'FETCH_USERS_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};
