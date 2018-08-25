import React, { Component } from 'react';

class ItemDesc extends Component {

	render() {
		const {description} = this.props;
		return (
			<p>{description}</p>
		)
	}
}

export default ItemDesc;
