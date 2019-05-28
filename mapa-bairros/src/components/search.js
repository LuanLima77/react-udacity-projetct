import React, { Component } from "react";

export default class Search extends Component {
	
	render() {
		return (
			<div className="search">
            <form className="form-inline active-cyan-3 active-cyan-4">
            <i className="fas fa-search" aria-hidden="true"></i>
            <input className="form-control form-control-sm ml-3 w-75" type="text" 
              placeholder="Filtrar locais..." aria-label="Search">
              </input>
            </form>
			</div>
		);
	}
}
