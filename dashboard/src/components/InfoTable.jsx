import React from 'react'
import SearchBar from './SearchBar'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import Table1 from './Table1';
import Table2 from './Table2';
import Table3 from './Table3';

function InfoTable(props) {
  const { infosLinha, infosPrev, infosParada, 
    showInfoLinha, showInfoPrev, showInfoParada } = props
  return (
    
    <div className="d-none d-md-flex flex-column col-md-9 ms-sm-auto col-lg-10 col-sm-11 px-md-4">
      <SearchBar />
      { showInfoLinha ? <Table1 infos={infosLinha} /> : null }
      { showInfoPrev ? <Table2 infos={infosPrev} /> : null }
      { showInfoParada ? <Table3 infos={infosParada} /> : null }
    </div>
  )
}

const MapStateToProps = (state) => ({
  infosLinha: state.infoLinhas.info,
  infosPrev: state.infoPrevChegada.info,
  infosParada: state.infoParada.info,
  showInfoLinha: state.searchBar.infoLinha,
  showInfoPrev: state.searchBar.infoPrev,
  showInfoParada: state.searchBar.infoParada
})

InfoTable.propTypes = PropTypes.shape({}).isRequired

export default connect(MapStateToProps)(InfoTable)