import React from 'react'
import Content from './Content'
import InfoTable from './InfoTable'
import SideBar from './SideBar'
import PropTypes from 'prop-types'

export default function Main() {
  const [showInfo, setShowInfo] = React.useState(true)
  return (
    <div className="row">
      <SideBar/>
      <InfoTable/>
    </div>
  )
}

Main.proptypes = PropTypes.shape({}).isRequired
