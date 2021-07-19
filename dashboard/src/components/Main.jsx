import React from 'react'
import Content from './Content'
import InfoTable from './InfoTable'
import SideBar from './SideBar'
// import { Switch } from 'react-router'

export default function Main(props) {
  const [showInfo, setShowInfo] = React.useState(true)
  return (
    <div className="row">
      <SideBar/>
      { showInfo ? <InfoTable/> : <Content/>}
    </div>
  )
}
