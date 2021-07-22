import React from 'react'
import PropTypes from 'prop-types'
import { posicaoVeiculos, actionSearchBarPosicaoLinha, actionSearchBarPosicaoGaragem } from '../redux/actions/posicoesVeiculos'
import { actionSearchInfoParadaMap } from '../redux/actions/infoParadas'
import { connect } from 'react-redux'

function Header(props) {
  const {getCurrentPositionAll, setSearchBarLinha, setSearchBarGaragem, setSearchInfoParadaMap } = props
  return (
    <>
      <div className="container-fluid d-flex justify-content-between align-items-center d-md-none bg-dark">
        <span className="fw-bold text-light">SPTRANS APP</span>
        <div className="btn-group dropstart">
          <button type="button" className="btn dropdown-toggle text-info" data-bs-toggle="dropdown" aria-expanded="false">
            <span>Fluxo</span>
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" onClick={getCurrentPositionAll} href="#">Completo</a></li>
            <li><a className="dropdown-item" onClick={setSearchBarLinha} href="#">Por linha</a></li>
            <li><a className="dropdown-item" onClick={setSearchBarGaragem} href="#">Por empresa</a></li>
            <li><a className="dropdown-item" onClick={setSearchInfoParadaMap} href="#">Paradas</a></li>
          </ul>
        </div>
      </div>
      <header className="d-none d-md-flex navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <div className="navbar-brand col-md-3 col-lg-2 me-0 px-3">
          <h4 className="fw-bolder">
            Dados sobre o transporte público da cidade de São Paulo
          </h4>
        </div>
      </header>
    </>
  )
}

const MapDispatchToProps = (dispatch) => ({
  getCurrentPositionAll: () => dispatch(posicaoVeiculos()),
  setSearchBarLinha: () => dispatch(actionSearchBarPosicaoLinha()),
  setSearchBarGaragem: () => dispatch(actionSearchBarPosicaoGaragem()),
  setSearchInfoParadaMap: () => dispatch(actionSearchInfoParadaMap()),
  
})

Header.propTypes = PropTypes.shape({}).isRequired

export default connect(null, MapDispatchToProps)(Header)