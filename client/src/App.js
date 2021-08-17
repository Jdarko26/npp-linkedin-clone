import './App.css';

import { BrowserRouter, Route} from 'react-router-dom';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
import MembersScreen from './screens/MembersScreen';
import JobsScreen from './screens/JobsScreen';
import Header from './components/Header';
import { useSelector } from 'react-redux';


function App() {
  
   const userSignIn = useSelector(state => state.userSignIn);
  const { userInfo } = userSignIn;
  

  return (
    <BrowserRouter>
      <div className="app">
           
        {userInfo ? (
          <div>
           
              <Header />
         
            <main>
              <Route path="/members" component={MembersScreen}></Route>
              <Route path="/jobs" component={JobsScreen}></Route>
              <Route path="/signin" component={HomeScreen} exact></Route>
              <Route path="/" component={HomeScreen} exact></Route>
            </main>
          </div>
        ) :
          (
            <div className = "app_signinscreen ">
              <Route path="/signup" component={SignUpScreen}></Route>
              <Route path="/signin" component={SignInScreen} ></Route>
              <Route path="/" component={SignInScreen} exact></Route>
            </div>
          )}

        
   
       
        
    </div>
   
</BrowserRouter>
  );
}

export default App;
