import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
        <div class="card p-3 align-items-center">
          <img class="card-img-top text-center" src={this.props.imagem} style={{ width: "70px" }} alt="Icone" />
          <div class="card-body">
            <h4 className="mb-3">{this.props.titulo}</h4>
            <p class="card-text">{this.props.descricao}</p>
          </div>
        </div>
    )
  }
}

export default Card;
