import React from 'react'
import LargerBar from './LargerBar'
import { connect } from "react-redux"
import { posicaoVeiculos, actionSearchBarPosicaoLinha, actionSearchBarPosicaoGaragem } from '../redux/actions/posicoesVeiculos'
import '../style/SideBar.css'
import PropTypes from 'prop-types'

function SideBar(props) {
  const {getCurrentPositionAll, setSearchBarLinha, setSearchBarGaragem} = props
  
  return (
    
      <LargerBar
      getCurrentPositionAll={getCurrentPositionAll}
      setSearchBarLinha={setSearchBarLinha}
      setSearchBarGaragem={setSearchBarGaragem} />
  
  )
}

const MapDispatchToProps = (dispatch) => ({
  getCurrentPositionAll: () => dispatch(posicaoVeiculos()),
  setSearchBarLinha: () => dispatch(actionSearchBarPosicaoLinha()),
  setSearchBarGaragem: () => dispatch(actionSearchBarPosicaoGaragem())
})

SideBar.propTypes = PropTypes.shape({}).isRequired

export default connect(null, MapDispatchToProps)(SideBar)