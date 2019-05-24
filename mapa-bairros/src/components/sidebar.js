import React, { Component } from "react";
import SidebarItem from "./sidebarItem";

export default class Sidebar extends Component {

    constructor(props)
    {
     super(props);

     this.state = {
        sidebarCssClass : "sidebar"
       };
       this.openNav = this.openNav.bind(this);
     

    }

   

    openNav()
    {
      this.setState({sidebarCssClass : 'sidebar openSidebar'});
    }
	render() {
		return (
			<div className="wrapper">
            	<button className ="openBtn" onClick={()=>this.openNav()}>
						☰ Locais
					</button>
				<nav className={this.state.sidebarCssClass}>
					<div className="sidebar-header">
						<h3 className="sidebar-title">Principais Atrações</h3>
					</div>
				
						<ul className="list-unstyled components">
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
