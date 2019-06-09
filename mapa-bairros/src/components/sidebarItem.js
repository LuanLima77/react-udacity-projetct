import React, { Component } from "react";

export default class SidebarItem extends Component {
	//                onClick={() => this.props.filterMap(this.props.label)}

	render() {
		return (
			<li className="sidebarLink">
				<a
					role="menuitem"
					href="#"
					onClick={() =>
						this.props.onMarkerClick(
							this.props.state.childRefs[`marker${this.props.venueId}`].props,
							this.props.state.childRefs[`marker${this.props.venueId}`].marker
						)
					}
				>
					{this.props.label}
				</a>
			</li>
		);
	}
}
