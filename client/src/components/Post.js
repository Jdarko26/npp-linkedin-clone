import { Avatar } from '@material-ui/core';
import React, {forwardRef } from 'react';
import InputOption from './InputOption';
import './Post.css';
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
//import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
//import SendOutlinedIcon from "@material-ui/icons/ShareOutlined";



const Post = forwardRef(({poster_name, constituency, message, numberOfLikes, numberOfComments}, ref) => {
    return (
        <div ref={ref} className="post">
            <div className="post_header">
                <Avatar >{poster_name[0]}</Avatar>
                <div className="post_info ">
                    <h2>{poster_name}</h2>
                    <p>{constituency} Constituency</p>
                </div>
            </div>
            <div className="post_body">
                <p>{message}</p>
            </div>

            <div className="post_buttons">
                <InputOption Icon={ThumbUpAltOutlinedIcon} number ={numberOfLikes}  title="Likes" color="grey" />
                <InputOption Icon={ChatOutlinedIcon} number ={numberOfComments} title="Comments" color="grey" />
               
            </div>
        </div>
    )
})
export default  Post;
