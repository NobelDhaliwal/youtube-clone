import { Avatar } from '@material-ui/core';
import React from 'react';
import VerifiedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import "./ChannelRow.css";
const ChannelRow=({
    image,
    Channel,
    verified,
    subs,
    noofVideos,
    description
})=>{
    return (
        <div className="channelRow">
        <Avatar className="channelRow_logo"
        alt={Channel} src={image}/>  
        <div className="channelRow_text">
        <h4>
            {Channel} {verified && <VerifiedIcon/> }
        </h4>
        <p>
            {subs} subscribers . {noofVideos} videos
        </p>
    <p>{description}</p>
        </div>
        </div>
    );
};

export default ChannelRow;
