import React, { Component } from "react";
import SidebarItem from "./sidebarItem";
import { PLACES } from "../resource/places";

export default class Sidebar extends Component {
	constructor(props) {
		super(props);
		this.closeNav = this.props.closeNav.bind(this);
	}
	

	render() {
		return (
			<div className="wrapper" role="navigation">

				<nav className= {this.props.cssClass} 
				     role="menubar" aria-orientation="vertical">
					<div className="sidebar-header">
							<button type="button"   onClick={() => this.closeNav()}
							        className="close close-btn" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>		
						<h3 tabIndex= "0" className="sidebar-title">Principais Atrações</h3>
					</div>

					<ul  className="list-unstyled components sidebar-content">

						{	PLACES.map((place, i) => (
						<SidebarItem
						key = {place.foursquareVenueId}
						label= {place.label}
						filterMap= {this.props.filterMap}
						
					/>
					
				))}

		
				<li className ="sidebarLink">
                            <a role="button" href="#" onClick={() => this.props.clearFilter()}
                             >LIMPAR</a>
                        </li>		
					</ul>
				</nav>
			</div>
		);
	}
}
