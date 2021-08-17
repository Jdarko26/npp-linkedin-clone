import './Feed.css';

import {  useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makePost } from '../actions/postsAction';
import { getPosts } from '../actions/postsAction';

import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import InputOption from './InputOption';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';

import FlipMove from 'react-flip-move';




export default function Feed() {

       
    const [input, setInput] = useState("");

   
    const dispatch = useDispatch();

    const { userInfo } = useSelector(state => state.userSignIn);
   
   
    const { posts } = useSelector(state => state.postedMessages);
   
    posts.sort((a, b) => {
                       return b.timestamp - a.timestamp;
        });
               
    
     useEffect(() => { 
         dispatch(getPosts());
       
     }, [dispatch]);
    
  

    const sendPost = (e) => {
         
    const poster_person = userInfo.fullName;
    const message = input;
        e.preventDefault();
        dispatch(makePost(poster_person,message));
        setInput('');
    };
   
   
    return (
        <div className="feed">
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <CreateIcon />
                    <form>
                        <input type="text" placeholder="Post something for others to see" value={input} onChange={e => setInput(e.target.value)} />
                        <button onClick = {sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed_inputOptions">
                <InputOption Icon={ImageIcon} title="Photo" color="#7085f9" />
                 <InputOption Icon={SubscriptionsIcon} title="View"  color="#E7A33E"/>
                <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
                 <InputOption Icon={CalendarViewDayIcon} title="Write article"  color="#77C15E"/>
                </div>
                
            </div>
            <FlipMove> 
            {posts ? (posts.map((post) => ( 
                <Post
                    key={post.post_id}
                    poster_name={post.poster_name}
                    constituency={post.constituency}
                    message={post.message}
                    numberOfLikes={post.numberOfLikes}
                    numberOfComments={post.numberOfComments}
                    
                />
        ))): (<div></div>) }
      </FlipMove>  
        </div>
    )
}
