import React, { Component } from "react";

export default class Search extends Component {

    constructor(props)
    {
        super(props);
        console.log(props);
        // this.handleChangeFilter = this.handleChangeFilter.bind(this);
        console.log("PROPS", props);
    }
    
    // handleChangeFilter(event)
	// {
    //   var filter = event.target.value;
    //   if(filter.length)
    //   {
    //     var markers = this.props.markers;
    //     var filteredMarkers = markers.map(marker => marker.label.includes(filter));
    //     this.props.markers = filteredMarkers;
        
     

    //   }
    // }
    
    render() {
		return (
			<div className="search">
            <form className="form-inline active-cyan-3 active-cyan-4">
            <i className="fas fa-search" aria-hidden="true"></i>
            <input  type="text" onChange={this.props.handleChangeFilter}
              className="form-control form-control-sm ml-3 w-75" 
              placeholder="Filtrar locais..." aria-label="Search">
              </input>
            </form>
			</div>
		);
	}
}
