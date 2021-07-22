import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { actionFetchPrevChegada, actionSearchInfoPrev  } from '../redux/actions/infoPrevChegada'
import '../style/Table.css'

function Table3(props) {
  const { infos, setSearchInfoPrev, getInfoPrev } = props
  function goToTableParadas(value) {
    getInfoPrev(value)
    setSearchInfoPrev()
  }
  return (
    <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Cod. Parada</th>
            <th scope="col">Nome</th>
            <th scope="col">Endereço</th>
          </tr>
        </thead>
        <tbody className="tolink">
          {infos.map((info, index) => (
            <React.Fragment key={index}>
                <tr onClick={() => goToTableParadas(info.cp)}>
                  <th scope="row">{index + 1}</th>
                  <td>{info.cp}</td>
                  <td>{info.np}</td>
                  <td>{info.ed}</td>
                </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
  )
}

const MapDispatchToProps = (dispatch) => ({
  setSearchInfoPrev: () => dispatch(actionSearchInfoPrev()),
  getInfoPrev: (value) => dispatch(actionFetchPrevChegada(value)),
})

Table3.propTypes = PropTypes.shape({}).isRequired

export default connect(null, MapDispatchToProps)(Table3)