import React from 'react';
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

export default function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets_article">
            <div className="widgets_articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );
    

    return (
        <div className="widgets">
            <div className="widgets_header">
                <h2>Npp News</h2>
                <InfoIcon />
            </div>
            {newsArticle("This side could be new articles for the party", "like npp news with links")}
            {newsArticle("Or a place for Ads", "You deside and let me know")}
           
        </div>
    )
}
