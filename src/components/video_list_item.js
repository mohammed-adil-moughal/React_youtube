import React from 'react'

const VideoListItem=(props)=>{
    console.log('proooopos ', props);

    return(
        <li onClick={() =>props.onVideoSelect(props.video)} 
        className="list-group-item">
        <div className="video-list-media">
             <div className="media-left">
             <img className="media-object" src={
        props.video.snippet.thumbnails.default.url}/>
             
                 </div>
                 <div className="media-body">
             <div className="media-heading">
             {
        props.video.snippet.title}
             </div>
             
                 </div>
            </div>
        
        </li>

    ); 
};

export default VideoListItem;