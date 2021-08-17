import './signscreen.css';

import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { signin } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

function SignInScreen() {
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

 const { error, loading} = useSelector(state => state.userSignIn);
 


    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password));
        setEmail('');  setPassword('');
    };

    return (
        <div className="signin">
           <div className="signin_portal">
            <img src="/images/nppimage.jpg" alt="Npp Logo"/>
            <p>NPP Membership Portal</p>
            </div>
         <form onSubmit={submitHandler}>
            
                <h2>Sign In for Account</h2>
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant="danger"> { error}</MessageBox> }
        
                <input type="email" placeholder="Email" required value={email} onChange={e => setEmail(e.target.value)}  />
               <input type="password"  placeholder="Password" required value={password} onChange={e => setPassword(e.target.value)}  />
                <button  type="submit">Sign In</button>
                <div className="signin_link">
                    Don't have an account? <Link to={'/signup'}>Sign up</Link>
                </div>
           </form>

        </div>
    )
}

export default SignInScreen
