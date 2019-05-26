import React, { Component } from 'react';

export default class SidebarItem extends Component {
    
    render() {
        return (

        
                        <li className ="sidebarLink">
                            <a  href="#">{this.props.label}</a>
                        </li>
                       
                   

                    

        )
    }
}