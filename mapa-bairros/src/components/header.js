import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <div className="jumbotron" id="header">
                <h1 class="header-title">Mapa de Botafogo</h1>
                <p class="text">Um mapa completo com as principais atrações do bairro Botafogo, no Rio de Janeiro</p>
            </div>
        )
    }
}