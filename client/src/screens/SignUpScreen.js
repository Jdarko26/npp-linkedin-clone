import './signscreen.css';

import {Link} from 'react-router-dom';
import {  useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';


function SignUpScreen() {

const [fullName, setFullName] = useState('');
    const [membershipID, setMembershipID] = useState('123456789');
    const [email, setEmail] = useState('');
         const [phone, setPhone] = useState('');
            const [constituency, setConstituency] = useState('Madina');
    const [password, setPassword] = useState('');
       const [confirmPassword, setConfirmPassword] = useState('');

 const { error, loading} = useSelector(state => state.userSignIn);
   

    const dispatch = useDispatch();

    

    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Password and confirm password does not match');
          // error ='Password and confirm password does not match';
        } else {
            dispatch(register(fullName,membershipID,email,phone, password));
        }
        setMembershipID(''); setEmail(''); setPhone(''); setConstituency(''); setPassword(''); setConfirmPassword('');
    };

        return (
        <div className="signin">
           <div className="signin_portal">
            <img src="/images/nppimage.jpg" alt="Npp Logo"/>
            <p>NPP Membership Portal</p>
            </div>
            <form onSubmit={submitHandler}>
                    <h2>Register Account</h2>
                    {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant="danger"> { error}</MessageBox> }
             
                <input type="text" placeholder="Enter your Fullname" value={fullName} onChange={e => setFullName(e.target.value)} required />
                <input type="hidden"  placeholder="Enter your Membership ID" value={membershipID} onChange={e => setMembershipID(e.target.value)} required/>
            <input type="text" placeholder="Enter your Email Address" value={email} onChange={e => setEmail(e.target.value)} required />
        
            <input type="text" placeholder="Enter your Mobile number" value={phone} onChange={e => setPhone(e.target.value)} required />
        
            <input type="hidden" placeholder="Enter your constituency" value={constituency} onChange={e => setConstituency(e.target.value)}  required />
        
            <input type="password"  placeholder="Enter password"  value={password} onChange={e => setPassword(e.target.value)} required />
        
            <input type="password" placeholder="Confirm password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required/>
                <button type="submit">Register</button>
             <div className="signin_link">
                 Already have an account? {' '} <Link to={'/signin'} >Sign In</Link>
              </div>
         </form>
              
        </div>
    )
}

export default SignUpScreen
