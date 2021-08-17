import React from 'react';
import "./HeaderOption.css";
import { Avatar } from "@material-ui/core";


export default function HeaderOption({ logout, Icon, title, onClick }) {
    
    
    return (
        <div onClick={onClick} className="headerOption">
            {Icon && <Icon className="headerOption_icon" />}
            {logout && (
                <Avatar className="headerOption__icon" src=""></Avatar>
            )}
            <h3 className="headerOption_title">{title}</h3>
        </div>
    );
}
