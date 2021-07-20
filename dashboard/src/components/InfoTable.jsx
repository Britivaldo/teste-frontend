import React from 'react'
import SearchBar from './SearchBar'
import PropTypes from 'prop-types'
import { actionFetchInfoLinhas1 } from '../redux/actions/infoLinhas.js';
import { connect } from 'react-redux';

function InfoTable(props) {
  const { infos, getInfos } = props
  return (
    
    <div className="d-none d-md-flex flex-column col-md-9 ms-sm-auto col-lg-10 col-sm-11 px-md-4">
      <button
      onClick={() => getInfos('Lapa')}
      className="btn btn-sm btn-dark">
        buscar
      </button>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">ID</th>
            <th scope="col">Circular</th>
            <th scope="col">Sentido</th>
            <th scope="col">Legenda(Principal)</th>
            <th scope="col">Legenda(Secundário)</th>
          </tr>
        </thead>
        <tbody>
          {infos.map((info, index) => (
            <React.Fragment key={info.cl}>
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{info.cl}</td>
                  <td>{info.lc ? 'Sim' : 'Não'}</td>
                  <td>{info.sl === 1 ? 'Principal' : 'Secundário' }</td>
                  <td>{info.tp}</td>
                  <td>{info.ts}</td>
                </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const MapStateToProps = (state) => ({
  infos: state.infoLinhas.info
})

const MapDispatchToProps = (dispatch) => ({
  getInfos: (value) => dispatch(actionFetchInfoLinhas1(value))
})

InfoTable.propTypes = PropTypes.shape({}).isRequired

export default connect(MapStateToProps, MapDispatchToProps)(InfoTable)