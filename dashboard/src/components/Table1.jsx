import React from 'react'
import PropTypes from 'prop-types'

export default function Table1(props) {
  const { infos } = props
  return (
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
  )
}

Table1.propTypes = PropTypes.shape({}).isRequired