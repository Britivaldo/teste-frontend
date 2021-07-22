import React from 'react'
import { faInfoCircle, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

export default function LargerBar(props) {
  const { 
    getCurrentPositionAll, setSearchBarLinha, setSearchBarGaragem,
    setSearchInfoLinha, setSearchInfoPrev, setSearchInfoParada,
    setSearchInfoParadaMap } = props
  return (
    <nav id="sidebarMenu" className="col-sm-3 col-lg-2 d-md-block bg-dark sidebar collapse">
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">          
          <li className="nav-item mb-2">
            <button
            className="btn btn-toggle d-flex flex-row align-items-center rounded collapsed text-info"
            data-bs-toggle="collapse" data-bs-target="#pos-collapse" aria-expanded="true">
              <FontAwesomeIcon icon={faMapMarkedAlt} /> Trânsito
            </button>
            <div className="collapse" id="pos-collapse">
              <div className="container d-flex flex-column" role="group" aria-label="Basic example">
                <button
                onClick={getCurrentPositionAll}
                type="button"
                className="btn btn-outline-warning btn-sm my-2">
                  Completo
                </button>
                <button
                onClick={setSearchBarLinha}
                type="button"
                className="btn btn-outline-warning btn-sm mb-2">
                  Linha
                </button>
                <button
                onClick={setSearchBarGaragem}
                type="button"
                className="btn btn-outline-warning btn-sm mb-2">
                  Garagem
                </button>
                <button
                onClick={setSearchInfoParadaMap}
                type="button"
                className="btn btn-outline-warning btn-sm mb-2">
                  Paradas
                </button>
              </div>
            </div>
          </li>
          <li className="nav-item mb-2">
            <button
            className="btn btn-toggle d-flex flex-row align-items-center rounded collapsed text-info"
            data-bs-toggle="collapse" data-bs-target="#info-collapse" aria-expanded="true">
              <FontAwesomeIcon icon={faInfoCircle} /> Informações
            </button>
            <div className="collapse" id="info-collapse">
              <div className="container d-flex flex-column" role="group" aria-label="Basic example">
                <button
                onClick={setSearchInfoLinha}
                type="button"
                className="btn btn-outline-warning btn-sm my-2">
                  Linha
                </button>
                <button
                onClick={setSearchInfoPrev}
                type="button"
                className="btn btn-outline-warning btn-sm mb-2">
                  Hora de chegada
                </button>
                <button
                onClick={setSearchInfoParada}
                type="button"
                className="btn btn-outline-warning btn-sm mb-2">
                  Lista de Paradas
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}

LargerBar.propTypes = PropTypes.shape({}).isRequired