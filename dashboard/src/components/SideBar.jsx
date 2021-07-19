import React from 'react'
import { connect } from "react-redux"
import { posicaoVeiculos, actionSearchBarPosicaoLinha } from '../redux/actions/posicoesVeiculos'

function SideBar(props) {
  const {getCurrentPositionAll, setSearchBar} = props
  
  return (
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
          <div className="position-sticky pt-3">
            <ul className="nav flex-column">          
              <li className="nav-item mb-2">
                <button
                className="btn btn-toggle align-items-center rounded collapsed"
                data-bs-toggle="collapse" data-bs-target="#pos-collapse" aria-expanded="true">
                  Posição dos Veículos
                </button>
                <div className="collapse show" id="pos-collapse">
                  <div className="btn-group-vertical px-3 pt-1" role="group" aria-label="Basic example">
                    <button
                    onClick={getCurrentPositionAll}
                    type="button" className="btn btn-primary btn-sm">Buscar Todos</button>
                    <button
                    onClick={setSearchBar}
                    type="button" className="btn btn-primary btn-sm">Pesquisar p/ Linha</button>
                  </div>
                </div>
              </li>
              <li className="nav-item mb-2">
                <button
                className="btn btn-toggle align-items-center rounded collapsed"
                data-bs-toggle="collapse" data-bs-target="#lin-collapse" aria-expanded="true">
                  Posição dos Veículos
                </button>
                <div className="collapse" id="lin-collapse">
                  <div className="btn-group-vertical px-3 pt-1" role="group" aria-label="Basic example">
                    <button
                    type="button"
                    className="btn btn-primary btn-sm">
                      Buscar Todos
                    </button>
                    <button
                    type="button"
                    className="btn btn-primary btn-sm">
                      Pesquisar p/ Linha
                    </button>
                  </div>
                </div>
              </li>
              <li className="nav-item mb-2">
                <button
                className="btn btn-toggle align-items-center rounded collapsed"
                data-bs-toggle="collapse" data-bs-target="#par-collapse" aria-expanded="true">
                  Posição dos Veículos
                </button>
                <div className="collapse" id="par-collapse">
                  <div className="btn-group-vertical px-3 pt-1" role="group" aria-label="Basic example">
                    <button
                    type="button"
                    className="btn btn-primary btn-sm">
                      Buscar Todos
                    </button>
                    <button
                    type="button"className="btn btn-primary btn-sm">Pesquisar p/ Linha</button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
  )
}

const MapDispatchToProps = (dispatch) => ({
  getCurrentPositionAll: () => dispatch(posicaoVeiculos()),
  setSearchBar: () => dispatch(actionSearchBarPosicaoLinha())
})

export default connect(null, MapDispatchToProps)(SideBar)