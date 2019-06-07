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
							this.props.refsTeste[this.props.venueID].props,
							this.props.refsTeste[this.props.venueID].marker
						)
					}
				>
					{this.props.label}
				</a>
			</li>
		);
	}
}
