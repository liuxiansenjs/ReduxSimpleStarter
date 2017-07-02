import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail.js';

const API_KEY = 'AIzaSyBhHFwvz3Qp95zaBARcngYZUOjQNahIr3g';



// create a new component to produce HTML.
class App extends Component {
	constructor(props) {
		super(props);
		this.state = { videos: [], selectedVideo: null };
		this.videoSearch('fashion');
	}
	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (data) => {
			this.setState({videos: data, selectedVideo: data[0]});
		});
	}
	render() {
		return (
			<div>
				<SearchBar onSearchTermChange= {term=>this.videoSearch(term)}/>
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList onVideoSelect={selectedVideo=>{this.setState({selectedVideo})}} videos={this.state.videos} />
			</div>
		);
	}
}


// Take this component's generated HTML and put it on the page (in the dom)
ReactDOM.render(<App />, document.querySelector('.container'));