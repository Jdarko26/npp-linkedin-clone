import axios from "axios";
import { USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_SIGNIN_FAIL,USER_SIGNOUT , USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS} from "../constants/userConstants"



export const register = (fullName,membershipID,email,phone, password) => async (dispatch) => {
    dispatch({ type: USER_REGISTER_REQUEST, payload: {fullName,membershipID,email,phone, password } });
    try {
        const { data } = await axios.post('https://posts.icsms.net/api/crud/signup', { fullName, membershipID, email, phone, password });
        if (data.error) {
             dispatch({
            type: USER_REGISTER_FAIL,
            payload:
                data
        });
        } else {
            dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
            dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
            localStorage.setItem('userInfo', JSON.stringify(data));
        }
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload:
                error.response && error.response.data.message ? error.response.data.message : error.message
        });
}

};
export const signin = (email, password) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: { email } });
    try {
        const { data } = await axios.post('https://posts.icsms.net/api/crud/signin', { email, password });
        if (data.error) {
            dispatch({
                type: USER_SIGNIN_FAIL,
                payload:
                    data.error
            });
        } else {
            dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
            localStorage.setItem('userInfo', JSON.stringify(data));
        }
    } catch (error) {
        dispatch({
            type: USER_SIGNIN_FAIL,
            payload:
                error.response && error.response.data.message ? error.response.data.message :error.message
        });
}

};


export const signout = () => (dispatch) => {
    localStorage.removeItem('userInfo');
    dispatch({ type: USER_SIGNOUT });
    //dispatch({ type: USER_SIGNOUT });
    
};

