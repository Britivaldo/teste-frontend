import React from 'react'
import Content from './Content'
import SideBar from './SideBar'
// import { Switch } from 'react-router'

export default function Main() {
  return (
    <div className="row">
      <SideBar/>
      <Content/>
    </div>
  )
}
