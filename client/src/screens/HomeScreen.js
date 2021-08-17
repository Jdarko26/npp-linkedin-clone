import './signscreen.css';


import Sidebar from '../components/Sidebar';
import Widgets from '../components/Widgets';
import Feed from '../components/Feed';


function HomeScreen() {
       
    return (
                   <div className="app_body">
                  <Sidebar />
                  <Feed />
                  <Widgets />
                  </div>
                      
    )
}

export default HomeScreen
