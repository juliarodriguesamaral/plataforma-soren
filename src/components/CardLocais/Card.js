import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
                <div class="card p-3 align-items-center">
                    <img class="card-img-top text-center img-fluid" src={this.props.imagem} alt="Icone" />
                    <div class="card-body">
                        <h4 className="mb-3">{this.props.titulo}</h4>
                        <h5 class="card-text">{this.props.avaliacao}</h5>
                        <p class="card-text"><a href={this.props.google}>{this.props.endereco}</a></p>
                    </div>
                </div>
        )
    }
}

export default Card;
