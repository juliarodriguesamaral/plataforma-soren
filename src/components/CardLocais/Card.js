import React, { Component } from 'react';

import Botao from "./Botao"


class Card extends Component {
    render() {
        return (
            <div class="card p-3 align-items-center">
                <img class="card-img-top text-center img-fluid" src={this.props.imagem} alt="Icone" />
                <div class="card-body text-center">
                    <h4 className="mb-3">{this.props.titulo}<strong>{this.props.categoria}</strong></h4>
                    <p class="card-text"><a href={this.props.google}>{this.props.endereco}</a></p>
                    <div class="container d-flex justify-content-between">
                        <h5>Status: Amigável</h5>
                        <h5><a href="#">Ver mais...</a></h5>
                    </div>
                </div>
                <div class = "container d-flex justify-content-between">
                <Botao tipo="button" cor='red' nome="Não Amigável" />
                <Botao tipo="button" cor='green' nome="Amigável" />
                </div>
            </div>
        )
    }
}

export default Card;
