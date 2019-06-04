import React, { Component } from "react";
import Search from "./search";

export default class Header extends Component {
	constructor(props) {
		super(props);
		this.openNav = this.props.openNav.bind(this);
	}

	render() {
		return (
			<div className="jumbotron" id="header" role="heading">
            	<button className="openBtn" onClick={() => this.openNav()}>
					☰ Locais
				</button>
				<h1 className="header-title">Mapa de Botafogo</h1>
				<p className="text">
					Um mapa completo com as principais atrações do bairro Botafogo, no Rio
					de Janeiro
				</p>
				<Search handleChangeFilter={this.props.handleChangeFilter} markers={this.props.markers} ></Search>

			
			</div>
		);
	}
}
