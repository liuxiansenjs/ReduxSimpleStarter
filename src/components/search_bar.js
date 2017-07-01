import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = { term: '可以在这里输入' };
	}
	render() {
		return (
			<div>
				<input 
					value={this.state.term}
					onChange={(event)=>{this.setState({term: event.target.value})}}
				/>
				Value of the state: {this.state.term}
			</div>
		);
	}

}

export default SearchBar;