import React from 'react';
import VItem from './VideoListItems'; 

const VideoList=({videos,handelVideoSelected})=>{
    const RVideos= videos.map((v)=>{
        return <VItem key={v.id.videoId} v={v} handelVideoSelected={handelVideoSelected}/>
    });
    return(
     <div className="ui relaxed divided list ">
         {RVideos}


    </div>
    )
};
export default VideoList;