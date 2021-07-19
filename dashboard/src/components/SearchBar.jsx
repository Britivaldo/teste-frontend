/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { connect } from 'react-redux';
import { posicaoVeiculosLinha } from '../redux/actions/posicoesVeiculos'

function SearchBar(props) {
  const { tipo, action, getCurrentPositionByLine } = props
  const [handler, setHandler] = React.useState({ foo: () => {}})
  const inputEl = React.useRef(null)
  React.useEffect(() => {
    switch(action) {
      case 'buscar_posicao_linha':
        console.log('mudei')
        setHandler({foo: getCurrentPositionByLine})
        break
      default:
        break
    }
  }, [action])
  return (
    <div className="d-flex py-3">
      <div className="navbar-nav">
        <div className="nav-item text-nowrap px-3">
          <button
          onClick={() => handler.foo(inputEl.current.value || 0)}
          type="button"
          className="btn btn-info">
            {tipo}
          </button>
        </div>
      </div>
      <input
      ref={inputEl}
      className="form-control form-control-dark w-100"
      type="text"
      placeholder="Search"
      aria-label="Search"/>
    </div>
  )
}

const MapStateToProps = (state) => ({
  tipo: state.searchBar.tipo,
  action: state.searchBar.action
})

const MapDispatchToProps = (dispatch) => ({
  getCurrentPositionByLine: (value) => dispatch(posicaoVeiculosLinha(value))
})

export default connect(MapStateToProps, MapDispatchToProps)(SearchBar)