import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import "./Header.css";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

const Header = () => {
    // useState Hooks
    const [inputSearch, setInputSearch] = useState("");
    return (

        // There are four div .header is parent div
        <div className="header">
            <div className="header_left">
            
                <MenuIcon />
                {/* logo */}
                {/* WE wrapped our logo with link so that 
                when someone click it homepage open */}
                <Link to="/">
                <img
                    className="header_logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
                    alt="youtube_logo" />
                    </Link>
                
                    </div>


            {/* second for input and search */}
            <div className="header_input">
                <input
                    type="text"
                    placeholder="Search"
                    onChange={(event) => { setInputSearch(event.target.value) }}
                    value={inputSearch}
                />
 {/* we use link component instead of anchor tag because link component
  do not get refreshed when we click it like a tag. */}
                {/* We will wrap our search icon with link component from react-router-dom */}
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header_inputButton" />
                </Link>
            </div >

            {/* Third for video,App,Notification nd Avatar icons */}
            <div className="header_icons">
                <span className="disappear">
                <VideoCallIcon className="header_icon" />
                </span>
                {/* Apps icon */}
                <span className="disappear">
                <AppsIcon className="header_icon1" />
                </span>
                <NotificationsIcon className="header_icon" />
                <Avatar
                    alt="Nobel"
                    src="https://avatars2.githubusercontent.com/u/70794984?s=400&u=5494bcd764543c41e52a2cd68973be47b31cb332&v=4" />
           
            </div>
        
        
        </div>

    );
};

export default Header;
//rfce shortcut -es7 extensions