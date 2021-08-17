import './Header.css';

import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import  BusinessCenterIcon  from '@material-ui/icons/BusinessCenter';
import { useDispatch} from 'react-redux';
import SearchIcon  from '@material-ui/icons/Search';
import { signout } from '../actions/userActions';
import { Link } from 'react-router-dom';


function Header() {
    
    const dispactch = useDispatch();
    const logoutOfApp =() => {
        dispactch(signout());
        
    };

    return (
      
       <div className="header">
             <div className="header_left">
                <img src="/images/nppimage.jpg" alt="npp logo" />

                <div className="header_search">
                     <SearchIcon />
                    <input placeholder="Search" type="text" />
                </div>
            </div>
            <div className="header_right">
            <Link to={'/'} ><HeaderOption Icon={HomeIcon} title="Home" /></Link>
             <Link to={'/jobs'} > <HeaderOption Icon={BusinessCenterIcon} title="Jobs" /></Link>
            <Link to={'/members'} ><HeaderOption Icon={SupervisorAccountIcon} title="Members" /></Link>
               
             <HeaderOption onClick={logoutOfApp} title="Logout" logout={true} />
            </div>
        </div>
    )
}

export default Header
