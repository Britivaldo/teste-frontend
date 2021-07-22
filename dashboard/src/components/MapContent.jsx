import React from 'react'
import MyMap from './MyMap'
import SearchBar from './SearchBar'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

function MapContent(props) {
  const { showBar } = props
  return (
      <main className="col-md-9 ms-sm-auto col-lg-10 col-sm-11 px-md-4">
        {showBar ? <SearchBar /> : null}
        <MyMap />   
      </main>    
  )
}

const MapStateToProps = (state) => ({
  showBar: state.searchBar.showSearchBar,
})

MapContent.propTypes = PropTypes.shape({}).isRequired

export default connect(MapStateToProps)(MapContent)