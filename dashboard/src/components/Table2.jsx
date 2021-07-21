import React from 'react'
import PropTypes from 'prop-types'

export default function Table2(props) {
  const { infos } = props
  return (
    <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Cod. Linha</th>
            <th scope="col">Sentido</th>
            <th scope="col">Legenda(Principal)</th>
            <th scope="col">Legenda(Secundário)</th>
            <th scope="col">Chegada</th>
          </tr>
        </thead>
        <tbody>
          {infos.map((info, index) => (
            <React.Fragment key={info.cl}>
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{info.cl}</td>
                  <td>{info.sl === 1 ? 'Principal' : 'Secundário' }</td>
                  <td>{info.lt0}</td>
                  <td>{info.lt1}</td>
                  <td>
                    <ul className="list-group">
                      {info.t.map((el, id) => <li key={id} className="list-group-item">{`${el}h`}</li>)}
                    </ul>
                  </td>
                </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
  )
}

Table2.propTypes = PropTypes.shape({}).isRequired