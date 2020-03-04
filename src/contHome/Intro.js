import React, { Component } from 'react'
import "./Intro.css"
import Banner from '/home/recode/Soren/plataforma-soren/src/images/Casal.png'
import BarraDeBusca from '../components/BarraDeBusca'


class Intro extends Component {
    render() {
        return (
            <section className="container-fluid bg d-flex align-items-center" style={{ backgroundImage: `url(${Banner})` }}>
                <div className="container text-white" style={{filter: "drop-shadow(20px 5px 20px black)"}}>
                    <h5 className="font-weight-bold"> FREQUENTE LUGARES SEM MEDO DE SER VOCÊ </h5>
                    <h1 className="display-3 font-weight-bold"> Encontre locais Amigáveis </h1>
                    <BarraDeBusca/>
                </div>
            </section>
        )
    }
}

export default Intro