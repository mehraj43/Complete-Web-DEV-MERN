import React, { Component } from 'react';
import withCounter from './withCounter';

export class HoverCounter extends Component {
	render() {
		const { count, incrementCount } = this.props;
		return (
			<div>
				<h2 onMouseOver={incrementCount}>
					{this.props.name} Hovered {count} Times
				</h2>
			</div>
		);
	}
}

export default withCounter(HoverCounter, 3);
