import React, { Component } from "react";


    
function Search(props)
{
    return (
        <div className="search">
        <form className="form-inline active-cyan-3 active-cyan-4">
        <i className="fas fa-search" aria-hidden="true"></i>
        <input role="searchbox" type="text" onChange={props.handleChangeFilter}
          className="form-control form-control-sm ml-3 w-75" 
          placeholder="Filtrar locais..." aria-label="Search">
          </input>
        </form>
        </div>
    );
}

		

export default  Search ;  
