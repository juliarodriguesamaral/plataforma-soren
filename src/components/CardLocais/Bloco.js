import React, { Component } from 'react';

//Importando o componente Card
import Card from './Card';

//Importando imagens
import Cafe from '/home/recode/Soren/plataforma-soren/src/components/CardLocais/img/Cafe.jpg'


class Bloco extends Component {
    render() {
        return (
            <section className="container" style={{marginBottom:"8%"}}>
                <div className="card-columns">
                <Card imagem={Cafe} titulo="Café Cafuné | " categoria="Café" google="https://goo.gl/maps/1oKwcT3WhUsxBpSb9" endereco="Endereço: Av. das Américas, 700 - 115K - Barra da Tijuca, Rio de Janeiro - RJ"/>
                <Card titulo="Busque um local" endereco="Ao procurar o local, sempre verifique as avaliações, elas são importantes para sua segurança."/>
                <Card titulo="Feedback" endereco="Com base na sua experiência no local, avalie e nos ajude na precisão da classificação."/>
                </div>
            </section>
                )
            }
        }

export default Bloco;
