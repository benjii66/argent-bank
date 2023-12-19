const initialState = {
    loading: false,
    userInfo: null,
    error: null
};

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_REQUEST':
            return {
                ...state,
                loading: true
            };
        case 'LOGIN_SUCCESS':
            console.log('Login success:', action.payload);
            return {
                ...state,
                loading: false,
                userInfo: action.payload
            };
            case 'LOGIN_FAILURE':
                return {
                    ...state,
                    loading: false,
                    error: action.payload
                };
                case 'LOGOUT':
                    return {
                        ...initialState,
                        userInfo: null
                    };
        default:
            return state;
    }
};
