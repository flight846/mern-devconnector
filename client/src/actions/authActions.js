import axios from 'axios';
import { REGISTER_SUCCESS, REGISTER_FAIL } from './types';
import { setAlert } from './alertActions';

export const register = ({ name, email, password }) => async dispatch => {
    const config = {
        headers: { 'Content-Type': 'application/json' }
    }

    const body = JSON.stringify({ name, email, password });

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
