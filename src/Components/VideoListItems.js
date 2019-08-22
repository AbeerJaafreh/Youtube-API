import React from 'react';
import '../style/video.css';

const VItem=({videos,handelVideoSelected})=>{
   return (
       <div className="video-item item" onClick={()=> handelVideoSelected(videos)} >
           <img className="ui image " 
           src={videos.snippet.thumbnails.medium.url}
            alt={videos.snippet.description}/>
           <div className="content">
               {videos.snippet.title}
           </div>

       </div>
   )
};
export default VItem;