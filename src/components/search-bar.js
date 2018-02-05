import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term : ''};
	}
	render(){
		return (
			<div className="search-bar">
		<input value = {this.state.term} onChange={event => this.onChangeFunction(event.target.value)}/>
		</div>
		);
	}
	onChangeFunction = (term) => {
		this.setState({'term': term});
		this.props.onSearchTermChange(term);
	};
}

export default SearchBar;