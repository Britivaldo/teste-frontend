import React from 'react'
import MyMap from './MyMap'
import SearchBar from './SearchBar'
import {connect} from 'react-redux'

function Content() {
  return (
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <SearchBar handleClick={() => {}}/>
        <MyMap />   
      </main>    
  )
}

// const MapStateToProps = (state) => ({
//   setHandler: 
// })

export default connect(null)(Content)