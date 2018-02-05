import React from 'react';
import ReactDOM from 'react-dom';

 const VideoDetail = ({video}) => {
 		if(!video.hasOwnProperty('id')){
 			return <div>Loading...</div>;
 		}
 		const videoUrl = 'https://youtube.com/embed/'+video.id.videoId;
		
		return (
			<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={videoUrl} allowFullScreen />
			</div>
			<div className = "details">
			<div>Title: {video.snippet.title}</div>
			<div>Description: {video.snippet.description}</div>
			</div>
			</div>
			);
};

export default VideoDetail;