import React from 'react'
import "./SearchPage.css";
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
const SearchPage = () => {
    return (
        <>
            <div className="searchPage">
                <div className="searchPage_filter">
                    <TuneOutlinedIcon />
                    <h2>Filter</h2>
                </div>
                <hr />

                <ChannelRow
                    image="https://yt3.ggpht.com/a/AATXAJywvBAXSKk4lvGxAR7FdgwbflfNUH994mGHlCwE=s176-c-k-c0x00ffffff-no-rj-mo"
                    Channel="Code With Nobel"
                    verified
                    subd="660k"
                    noofVideos={382}
                    description="Best Channel to learn  Web Development." />
                    <hr/>
            
            <VideoRow
            views="2.4M"
            subs="659k"
            description="Learn Complete React in 1 hour for begginners as well as for pros"
            timestamp="2 hours ago"
            channel="Code With Nobel"
            title="React"
            image="https://udemycouponcodes.com/wp-content/uploads/2019/08/React-Tutorial.jpg"
            />

            <VideoRow
            views="1.1k"
            subs="659k"
            description="Learn React Hooks in 1 Hour...check this out"
            timestamp="2 hours ago"
            channel="Code With Nobel"
            title="All React HOOKS covered in one video for absolute beginners "
            image="https://i.morioh.com/2019/12/25/551a8889c26b.jpg"
            />

<VideoRow
            views="1M"
            subs="659k"
            description="Do you want a Free JS one hour training ....check this out"
            timestamp="1 Week ago"
            channel="Code With Nobel"
            title="JS"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjXMV4f4WIrbdlmBAWW5bCz4oqRZ97Og7BVw&usqp=CAU"
            />

           <VideoRow
            views="700k"
            subs="659k"
            description="You can learn Simple and efficient TodoAPP build with react and react hooks"
            timestamp="2 days ago"
            channel="Code With Nobel"
            title="Create TodoApp with React and useState Hooks for Beginners"
            image="https://scotch-res.cloudinary.com/image/upload/w_auto,q_auto:good,f_auto/media/1/4lLYzcCSWiF5Cf2YY9A6_create-a-simple-to-do-app-with-react.png"
            />
            </div>
        </>
    );
};

export default SearchPage;
