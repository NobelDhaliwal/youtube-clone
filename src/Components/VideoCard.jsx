import { Avatar } from '@material-ui/core'
import React from 'react';
import "./VideoCard.css";

const VideoCard = ({ image, title, channel, channelimg, views, timestamp }) => {
    return (
        <div className="videoCard">
            <img className="videoCard_thumbnail" src={image} alt="youtube_videos" />
            <div className="videoCard_info">
                <Avatar
                    className="videoCard_avatar"
                    alt={channel}
                    src={channelimg} />
                <div className="videoCard_text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views} . {timestamp}
                   </p>
                </div>
            </div>
        </div>

    );
};

export default VideoCard;
