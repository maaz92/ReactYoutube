import React from 'react';
import ReactDOM from 'react-dom';
import VideoListItem from './video-list-item';

const VideoList = (props) => {
		const videoItems = props.videos.map((video) => {
			return <VideoListItem videoSelect ={() => props.videoSelect(video)} key={video.etag} video={video} />
		});

		return (
			<div className="col-md-4">
			<ul>
			{videoItems}
			</ul>
			</div>
		);
};

export default VideoList;