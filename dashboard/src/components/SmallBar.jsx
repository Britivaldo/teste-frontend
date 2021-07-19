import { faMapMarkedAlt, faParking } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function SmallBar(props) {
  const {getCurrentPositionAll} = props
  return (
    <nav className="col-sm-1 d-none d-sm-block d-md-none bg-dark sidebar">
      <ul className="nav flex-column">
        <li className="nav-item text-light pt-3">
          <button
          onClick={getCurrentPositionAll}
          type="button"
          className="btn btn-light text-warning btn-sm">
            <FontAwesomeIcon icon={faMapMarkedAlt}/>
          </button>
        </li>
        <li className="nav-item text-light pt-3">
          <button
          onClick={() => {}}
          type="button"
          className="btn btn-light text-warning btn-sm">
            <FontAwesomeIcon icon={faParking}/>
          </button>
        </li>
      </ul>
    </nav>
  )
}
