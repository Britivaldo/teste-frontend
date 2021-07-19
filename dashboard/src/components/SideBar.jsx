import React from 'react'
import LargerBar from './LargerBar'
import { connect } from "react-redux"
import { posicaoVeiculos, actionSearchBarPosicaoLinha, actionSearchBarPosicaoGaragem } from '../redux/actions/posicoesVeiculos'
import '../style/SideBar.css'
import SmallBar from './SmallBar'

function SideBar(props) {
  const {getCurrentPositionAll, setSearchBarLinha, setSearchBarGaragem} = props
  
  return (
    <>
      <SmallBar
      getCurrentPositionAll={getCurrentPositionAll}
       />
      <LargerBar
      getCurrentPositionAll={getCurrentPositionAll}
      setSearchBarLinha={setSearchBarLinha}
      setSearchBarGaragem={setSearchBarGaragem} />
    </>
  )
}

const MapDispatchToProps = (dispatch) => ({
  getCurrentPositionAll: () => dispatch(posicaoVeiculos()),
  setSearchBarLinha: () => dispatch(actionSearchBarPosicaoLinha()),
  setSearchBarGaragem: () => dispatch(actionSearchBarPosicaoGaragem())
})

export default connect(null, MapDispatchToProps)(SideBar)