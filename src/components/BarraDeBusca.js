import React, { Component } from 'react'

class BarraDeBusca extends Component {
    render() {
        return (
            <section className="container m-0 mt-4 mb-4">
                <div class="row w-auto">
                <div class="col-sm p-0">
                    <input type="text" class="form-control w-100" placeholder="Onde você quer ir?" aria-label="Procurar local amigável" aria-describedby="button-addon2" />
                    </div>
                    <div class="col-sm p-0">
                        <select class="custom-select w-100" id="inputGroupSelect01">
                            <option selected>Categorias</option>
                            <option value="1">Restaurantes</option>
                            <option value="2">Lanchonetes</option>
                            <option value="3">Cafés</option>
                            <option value="4">Bares</option>
                            <option value="5">Baladas</option>
                        </select>
                    </div>
                    <div class="col-sm p-0">
                        <button type="button" class="btn btn-primary w-100" id="button-addon2" value='Buscar'>Buscar</button>
                </div>
                </div>
            </section>
        )
    }
}

export default BarraDeBusca