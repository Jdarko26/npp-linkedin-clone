import axios from "axios";
import { POSTS_LIST_FAIL, POSTS_LIST_REQUEST, POSTS_LIST_SUCCESS} from "../constants/postsConstants"
import { MAKE_POSTS_FAIL, MAKE_POSTS_REQUEST, MAKE_POSTS_SUCCESS} from "../constants/postsConstants"




export const makePost = (poster_name, message) => async (dispatch, getState) => {
    dispatch({ type: MAKE_POSTS_REQUEST, payload: {} });
    const { userSignIn: { userInfo }} = getState();
    
    try {
        const { data } = await axios.post('https://posts.icsms.net/api/crud/posts', { poster_name, message }, { 
            headers: { Authorization: `Bearer ${userInfo.token}` }
             });
        if (data.error) {
            dispatch({
                type: MAKE_POSTS_FAIL,
                payload:
                    data
            });
        } else {
            dispatch({ type: MAKE_POSTS_SUCCESS, payload: {...data, timestamp: new Date().getTime() }});
          
        }
    } catch (error) {
        dispatch({
            type: MAKE_POSTS_FAIL,
            payload:
                error.response && error.response.data.message ? error.response.data.message :error.message
        });
}

};




export const getPosts = () => async (dispatch,getState) => {
    dispatch({ type: POSTS_LIST_REQUEST, payload: {} });
       const { userSignIn: { userInfo } } = getState();
    try {
        const { data } = await axios.get('https://posts.icsms.net/api/crud/posts', { 
            headers: { Authorization: `Bearer ${userInfo.token}` }
             });
        if (data.error) {
            dispatch({
                type: POSTS_LIST_FAIL,
                payload:
                    data
            });
        } else {
            dispatch({ type: POSTS_LIST_SUCCESS, payload: data });
          
        }
    } catch (error) {
        dispatch({
            type: POSTS_LIST_FAIL,
            payload:
                error.response && error.response.data.message ? error.response.data.message :error.message
        });
}

};