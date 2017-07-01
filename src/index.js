import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyBhHFwvz3Qp95zaBARcngYZUOjQNahIr3g';



// create a new component to produce HTML.
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {videos: []};
		YTSearch({key: API_KEY, term: 'learn react'}, (data) => {
			this.setState({videos: data});
		});
	}
	render() {
		return (
			<div>
				<SearchBar />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}


// Take this component's generated HTML and put it on the page (in the dom)
ReactDOM.render(<App />, document.querySelector('.container'));