import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { userRegisterReducer, userSignInReducer } from './reducers/userReducers';
import { postsReducer} from './reducers/postsReducers';

const initialState = {
    userSignIn: {
        userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
  },
     postedMessages: {
        posts:  []
        }
    
       
};

const reducer = combineReducers({
  userSignIn: userSignInReducer,
  userRegister: userRegisterReducer,
  postedMessages: postsReducer
  
 
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));  

export default store;