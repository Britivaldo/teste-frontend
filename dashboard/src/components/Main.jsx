import React from 'react'
import {connect} from 'react-redux'
import MapContent from './MapContent'
import InfoTable from './InfoTable'
import SideBar from './SideBar'
import PropTypes from 'prop-types'

function Main(props) {
  const { showInfo } = props
  return (
    <div className="row">
      <SideBar/>
      {showInfo ? <InfoTable/> : <MapContent/>}
    </div>
  )
}

const MapStateToProps = (state) => ({
  showInfo: state.searchBar.showInfo,
})

Main.propTypes = PropTypes.shape({}).isRequired

export default connect(MapStateToProps)(Main)