import './Sidebar.css';
import { Avatar } from '@material-ui/core';
import {  useSelector } from 'react-redux';


export default function Sidebar() {

      const { userInfo } = useSelector(state => state.userSignIn);
   
    console.log(userInfo);

    const recentItem = (topic) => (
            <div className="sidebar_recentItem">
                <span className="sidebar_hash">#</span>
                <p>{topic}</p>
            </div>
        );
    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <img src="/images/sidebarimage.jpeg" alt="" />
                <Avatar className="sidebar_avatar">
                   {userInfo?.fullName[0]}
                </Avatar>
                <h2> {userInfo.fullName}</h2>
                <h4>{userInfo.constituency} Constituency</h4>
            </div>
            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Joined Date</p>
                    <p className="sidebar_statNumber">18th Aug 1990</p>
                </div>
                
            </div>
            <div className="sidebar_bottom">
                <p>Interest</p>
                {recentItem('activist')}
                {recentItem('compagning')}
                  {recentItem('volunteering')}
                 
                
</div>
        </div>
    )
}
