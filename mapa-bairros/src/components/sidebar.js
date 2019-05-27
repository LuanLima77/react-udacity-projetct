import React, { Component } from "react";
import SidebarItem from "./sidebarItem";

export default class Sidebar extends Component {
	constructor(props) {
		super(props);
		console.log("HEADER", props);
		this.closeNav = this.props.closeNav.bind(this);
	}
	

	render() {
		return (
			<div className="wrapper">

				<nav className= {this.props.cssClass}>
					<div className="sidebar-header">
							<button type="button"   onClick={() => this.closeNav()}
							        className="close close-btn" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>		
						<h3 className="sidebar-title">Principais Atrações</h3>
					</div>

					<ul className="list-unstyled components sidebar-content">
						<SidebarItem
							label="Botafogo Praia Shopping"
							lat="-22.9475308"
							lng="-43.1834283"
						/>
						<SidebarItem
							label="Centro Empresarial Mourisco"
							lat="-22.9504551"
							lng="-43.1806529"
						/>
						<SidebarItem
							label="Shopping Rio Sul"
							lat="-22.9574369"
							lng="-43.1771566"
						/>
						<SidebarItem
							label="Fogo de Chão"
							lat="-22.9490574"
							lng="-43.180057"
						/>
						<SidebarItem
							label="Clube Guanabara"
							lat="-22.8172918"
							lng="-43.2093807"
						/>
						<SidebarItem
							label="Sede de General Severiano(Botafogo de Futebol e Regatas)"
							lat="-22.9548411"
							lng="-43.1779454"
						/>
						<SidebarItem
							label="Espaço Itaú de Cinema"
							lat="-22.9450122"
							lng="-43.182563"
						/>
					</ul>
				</nav>
			</div>
		);
	}
}
