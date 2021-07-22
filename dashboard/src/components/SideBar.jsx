import React from 'react'
import LargerBar from './LargerBar'
import { connect } from "react-redux"
import { posicaoVeiculos, actionSearchBarPosicaoLinha, actionSearchBarPosicaoGaragem } from '../redux/actions/posicoesVeiculos'
import { actionSearchInfoLinha } from '../redux/actions/infoLinhas'
import { actionSearchInfoPrev } from '../redux/actions/infoPrevChegada' 
import { actionSearchInfoParada, actionSearchInfoParadaMap } from '../redux/actions/infoParadas'; 
import '../style/SideBar.css'
import PropTypes from 'prop-types'

function SideBar(props) {
  const { getCurrentPositionAll,setSearchBarLinha, setSearchBarGaragem,
    setSearchInfoLinha, setSearchInfoPrev, setSearchInfoParada,
    setSearchInfoParadaMap } = props
  
  return (
    
      <LargerBar
      getCurrentPositionAll={getCurrentPositionAll}
      setSearchBarLinha={setSearchBarLinha}
      setSearchBarGaragem={setSearchBarGaragem}
      setSearchInfoLinha={setSearchInfoLinha}
      setSearchInfoPrev={setSearchInfoPrev}
      setSearchInfoParada={setSearchInfoParada}
      setSearchInfoParadaMap={setSearchInfoParadaMap} />
  
  )
}

const MapDispatchToProps = (dispatch) => ({
  getCurrentPositionAll: () => dispatch(posicaoVeiculos()),
  setSearchBarLinha: () => dispatch(actionSearchBarPosicaoLinha()),
  setSearchBarGaragem: () => dispatch(actionSearchBarPosicaoGaragem()),
  setSearchInfoLinha: () => dispatch(actionSearchInfoLinha()),
  setSearchInfoPrev: () => dispatch(actionSearchInfoPrev()),
  setSearchInfoParada: () => dispatch(actionSearchInfoParada()),
  setSearchInfoParadaMap: () => dispatch(actionSearchInfoParadaMap())
})

SideBar.propTypes = PropTypes.shape({}).isRequired

export default connect(null, MapDispatchToProps)(SideBar)