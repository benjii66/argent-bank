//the initial state means the user isn't trying to login yet
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
                loading: true //the user is trying to login
            };
        case 'LOGIN_SUCCESS':
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

                //if the user logs out, the user information is null because is not logged in anymore
                case 'LOGOUT':
                    return {
                        ...initialState,
                        userInfo: null
                    };
        default:
            return state;
    }
};
