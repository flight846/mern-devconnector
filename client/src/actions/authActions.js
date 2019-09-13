import axios from 'axios';
import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, USER_LOADED, AUTH_ERROR } from './types';
import { setAlert } from './alertActions';

// export const loadUser = () => async dispatch => {

// }

export const register = ({ name, email, password, password2 }) => async dispatch => {
    const config = {
        headers: { 'Content-Type': 'application/json' }
    }

    const body = JSON.stringify({ name, email, password, password2 });

    try {
        const res = await axios.post('/api/users/register', body, config);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        const errors = err.response.data;
        if (errors) {
            const msgs = Object.values(errors)
            for (const msg of msgs) {
                dispatch(setAlert(msg, 'danger'))
            }
        }
        
        dispatch({ type: REGISTER_FAIL })
    }
}

export const login = ({ email, password }) => async dispatch => {
    const config = {
        headers: { 'Content-Type': 'application/json' }
    }

    const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post('/api/users/login', body, config);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        const errors = err.response.data;
        if (errors) {
            const msgs = Object.values(errors)
            for (const msg of msgs) {
                dispatch(setAlert(msg, 'danger'))
            }
        }

        dispatch({ type: LOGIN_FAIL })
    }
}
