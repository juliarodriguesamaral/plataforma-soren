import React, { Component } from 'react'
import BarraDeBusca from '../components/BarraDeBusca'
import Bloco from '../components/LocaisAmig/Bloco'
import Filtro from '../components/Filtro'

class Intro extends Component {
    render() {
        return (
            <section className="container">
                <BarraDeBusca/>
                <Filtro/>
                <Bloco/>

            </section>
        )
    }
}

export default Intro