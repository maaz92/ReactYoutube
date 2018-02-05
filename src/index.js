import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';
import _ from 'lodash';

var API_KEY = 'AIzaSyBZtN4cLB_awFA-ZFbw-mbMFNcHHerBYso';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {video: {}, videos: []};

		YTSearch({key: API_KEY, term: 'Avicii The Nights'}, (videos) =>{
			this.setState({video: videos[0], videos: videos});
			console.log(this.state.videos);
		});

		this.videoSearch = (term) => {
			YTSearch({key: API_KEY, term: term}, (videos) =>{
				this.setState({
					video: videos[0],
				 	videos: videos
				});
			});
		};

	}

	render() { 
		const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
		return (
		<div>
			<SearchBar onSearchTermChange={term => videoSearch(term)} />
			<VideoDetail video={this.state.video}/>
			<VideoList videoSelect={video => this.setState({video})} videos={this.state.videos}/>
		</div>
		);
	}	
}

ReactDOM.render(<App />,document.querySelector('.container'));

