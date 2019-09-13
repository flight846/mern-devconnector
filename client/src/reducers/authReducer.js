import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL } from '../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    loading: true,
    user: null
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case REGISTER_SUCCESS:
            return { 
                ...state, 
                ...payload,
                isAuthenticated: true,
                loading: false
            }
        case REGISTER_FAIL:
                localStorage.removeItem('token')
                return { 
                    ...state, 
                    ...payload,
                    token: null,
                    isAuthenticated: false,
                    loading: false
                }
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token)
            return {
                ...state,
                ...payload,
                token: payload.token,
                isAuthenticated: true,
                loading: false
            }
        case LOGIN_FAIL:
            localStorage.removeItem('token')
            return {
                ...state,
                ...payload,
                token: null,
                isAuthenticated: false,
                loading: false
            }
        default:
            return state
    }
}
