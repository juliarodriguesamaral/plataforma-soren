import React, { Component } from 'react';

//Importando o componente Card
import Card from '../../components/Card/Card';

//Importando imagens
import Account from './img/Account.svg'
import Search from './img/Search.svg'
import Rating from './img/Rating.svg'

class Bloco extends Component {
    render() {
        return (
            <section className="container" style={{marginBottom:"8%"}}>
                <div className="card-columns">
                <Card imagem={Account} titulo="Crie sua conta" descricao="Para sua segurança e de outras pessoas, exigimos login para buscar lugares."/>
                <Card imagem={Search} titulo="Busque um local" descricao="Ao procurar o local, sempre verifique as avaliações, elas são importantes para sua segurança."/>
                <Card imagem={Rating} titulo="Feedback" descricao="Com base na sua experiência no local, avalie e nos ajude na precisão da classificação."/>
                </div>
            </section>
                )
            }
        }

export default Bloco;