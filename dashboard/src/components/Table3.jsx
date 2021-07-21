import React from 'react'
import PropTypes from 'prop-types'

export default function Table2(props) {
  const { infos } = props
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
        <tbody>
          {infos.map((info, index) => (
            <React.Fragment key={info.cl}>
                <tr>
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

Table2.propTypes = PropTypes.shape({}).isRequired