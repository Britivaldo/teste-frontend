import React from 'react'
import { faInfoCircle, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function LargerBar(props) {
  const {getCurrentPositionAll, setSearchBarLinha, setSearchBarGaragem} = props
  return (
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse">
          <div className="position-sticky pt-3">
            <ul className="nav flex-column">          
              <li className="nav-item mb-2">
                <button
                className="btn btn-toggle align-items-center rounded collapsed text-info"
                data-bs-toggle="collapse" data-bs-target="#pos-collapse" aria-expanded="true">
                  <FontAwesomeIcon icon={faMapMarkedAlt} /> Marcadores
                </button>
                <div className="collapse show" id="pos-collapse">
                  <div className="btn-group-vertical px-3 pt-1" role="group" aria-label="Basic example">
                    <button
                    onClick={getCurrentPositionAll}
                    type="button"
                    className="btn btn-warning btn-sm">
                      Todos
                    </button>
                    <button
                    onClick={setSearchBarLinha}
                    type="button"
                    className="btn btn-warning btn-sm">
                      Linha
                    </button>
                    <button
                    onClick={setSearchBarGaragem}
                    type="button"
                    className="btn btn-warning btn-sm">
                      Empresa
                    </button>
                  </div>
                </div>
              </li>
              <li className="nav-item mb-2">
                <button
                className="btn btn-toggle align-items-center rounded collapsed text-info"
                data-bs-toggle="collapse" data-bs-target="#info-collapse" aria-expanded="true">
                  <FontAwesomeIcon icon={faInfoCircle} /> Informações
                </button>
                <div className="collapse show" id="info-collapse">
                  <div className="btn-group-vertical px-3 pt-1" role="group" aria-label="Basic example">
                    <button
                    type="button"
                    className="btn btn-warning btn-sm">
                      Texto 1
                    </button>
                    <button
                    type="button"
                    className="btn btn-warning btn-sm">
                      Texto 2
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
  )
}
