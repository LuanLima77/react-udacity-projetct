import React, { Component } from 'react';

export default class SidebarItem extends Component {
    constructor(props) {
        super(props);
        console.log("PROPS RECEBIDAS ITEM", props);
		this.filterMap = this.props.filterMap.bind(this);
	}
	

    render() {
        return (

        
                        <li className ="sidebarLink">
                            <a  href="#" onClick={() => this.filterMap(this.props.label)}
                             >{this.props.label}</a>
                        </li>
                       
                   

                    

        )
    }
}