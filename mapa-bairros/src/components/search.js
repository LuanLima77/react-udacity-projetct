import React, { Component } from "react";

export default class Search extends Component {

    constructor(props)
    {
        super(props);
        this.handleChangeFilter = this.handleChangeFilter.bind(this);
    }
    
    handleChangeFilter(event)
	{
      var filter = event.target.value;
      if(filter.length)
      {
        console.log("CAMPO", event.target.value);

      }
	}

	render() {
		return (
			<div className="search">
            <form className="form-inline active-cyan-3 active-cyan-4">
            <i className="fas fa-search" aria-hidden="true"></i>
            <input  type="text" onChange={this.handleChangeFilter}
              className="form-control form-control-sm ml-3 w-75" 
              placeholder="Filtrar locais..." aria-label="Search">
              </input>
            </form>
			</div>
		);
	}
}
