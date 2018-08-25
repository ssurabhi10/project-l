import React, { Component } from 'react';

class ItemTitle extends Component {

	render() {
		const {title} = this.props;
		return (
			<p>{title}</p> 
		)
	}
}

export default ItemTitle;
