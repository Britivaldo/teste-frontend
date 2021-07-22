import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { posicaoVeiculosLinha, posicaoVeiculosGaragem } from '../redux/actions/posicoesVeiculos';
import { actionFetchInfoLinhas1 } from '../redux/actions/infoLinhas.js';
import { actionFetchPrevChegada,  } from '../redux/actions/infoPrevChegada'
import { actionFetchInfoParada } from '../redux/actions/infoParadas';


function SearchBar(props) {
  const { 
    tipo, action, getCurrentPositionByLine, getInfoPrev, getInfoParada,
    getInfoLinha, getCurrentPositionByGarage, item } = props
  const [handler, setHandler] = React.useState({ foo: () => {}})
  const inputEl = React.useRef(null)
  React.useEffect(() => {
    switch(action) {
      case 'buscar_posicao_linha':
        setHandler({foo: getCurrentPositionByLine})
        break
      case 'buscar_posicao_garagem':
        setHandler({foo: getCurrentPositionByGarage})
        break
      case "pesquisa_linha":
        setHandler({foo: getInfoLinha})
        break
      case "pesquisa_previsao":
        setHandler({foo: getInfoPrev})
        break
      case "pesquisa_parada":
        setHandler({foo: getInfoParada})
        break
      default:
        break
    }
    inputEl.current.value=""
  }, [action])
  React.useEffect(() =>{
    inputEl.current.value = ""
  }, [item])
  return (
    <div className="d-flex py-3">
      <div className="navbar-nav">
        <div className="nav-item text-nowrap px-3">
          <button
          onClick={() => handler.foo(inputEl.current.value || 0)}
          type="button"
          className="btn btn-info">
            <FontAwesomeIcon icon={ faSearch }/>
          </button>
        </div>
      </div>
      <input
      ref={inputEl}
      className="form-control form-control-dark w-100"
      type="text"
      placeholder={tipo}
      aria-label="Search"/>
    </div>
  )
}

const MapStateToProps = (state) => ({
  action: state.searchBar.action,
  tipo: state.searchBar.tipo,
  item: state.posicoesVeiculos.item
})

const MapDispatchToProps = (dispatch) => ({
  getCurrentPositionByLine: (value) => dispatch(posicaoVeiculosLinha(value)),
  getCurrentPositionByGarage: (value) => dispatch(posicaoVeiculosGaragem(value)),
  getInfoLinha: (value) => dispatch(actionFetchInfoLinhas1(value)),
  getInfoPrev: (value) => dispatch(actionFetchPrevChegada(value)),
  getInfoParada: (value) => dispatch(actionFetchInfoParada(value))
})

SearchBar.propTypes = PropTypes.shape({}).isRequired

export default connect(MapStateToProps, MapDispatchToProps)(SearchBar)