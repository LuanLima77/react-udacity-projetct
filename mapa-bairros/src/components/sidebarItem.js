import React, { Component } from 'react';

export default class SidebarItem extends Component {


    render() {
        return (


            <li className="sidebarLink">
                <a role="menuitem" href="#" onClick={() => this.props.filterMap(this.props.label)}
                >{this.props.label}</a>
            </li>





        )
    }
}