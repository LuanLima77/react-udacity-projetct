import React, { Component } from 'react';
import SidebarItem from './sidebarItem';

export default class Sidebar extends Component {
    render() {
        return (
            <div className="wrapper">
                <nav id="sidebar">
                    <div className="sidebar-header">
                        <h3>Principais Atrações</h3>
                    </div>

                    <ul className="list-unstyled components">

                        <SidebarItem label="Botafogo Praia Shopping" lat="-22.9475308" lng="-43.1834283" ></SidebarItem>
                        <SidebarItem label="Centro Empresarial Mourisco" lat="-22.9504551" lng="-43.1806529" ></SidebarItem>
                        <SidebarItem label="Shopping Rio Sul" lat="-22.9574369" lng="-43.1771566" ></SidebarItem>
                        <SidebarItem label="Fogo de Chão" lat="-22.9490574" lng="-43.180057"></SidebarItem>
                        <SidebarItem label="Clube Guanabara" lat="-22.8172918" lng="-43.2093807" ></SidebarItem>
                        <SidebarItem label="Sede de General Severiano(Botafogo de Futebol e Regatas)" lat="-22.9548411" lng="-43.1779454" ></SidebarItem>
                        <SidebarItem label="Espaço Itaú de Cinema" lat="-22.9450122" lng="-43.182563" ></SidebarItem>



                    </ul>

                </nav>

            </div>

        )
    }
}