import {  MAKE_POSTS_FAIL,  MAKE_POSTS_REQUEST, MAKE_POSTS_SUCCESS,  POSTS_LIST_FAIL, POSTS_LIST_REQUEST, POSTS_LIST_SUCCESS} from "../constants/postsConstants"


export const postsReducer = (state = {}, action) => {
    switch (action.type) {
        case MAKE_POSTS_REQUEST:
            return { posts: [...state.posts] };
        case MAKE_POSTS_SUCCESS:
            return { loading: false,  posts: [...state.posts, action.payload ] };
        case MAKE_POSTS_FAIL:
            return { loading: false, posts: [...state.posts], error: action.payload };
        case POSTS_LIST_REQUEST:
            return { loading: true , posts: [...state.posts] };
        case POSTS_LIST_SUCCESS:
            return { loading: false, posts: [...action.payload] };
        case POSTS_LIST_FAIL:
            return { loading: false, error: action.payload , posts: [...state.posts]};
      
        default:
            return state;
    }    
};