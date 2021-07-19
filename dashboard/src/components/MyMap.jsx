import React from "react"
import { Map, Marker } from "pigeon-maps"
import { connect } from "react-redux"

function MyMap(props) {
  const { posicao } = props
  const [coordinates, setCoordinates] = React.useState([[-23.618237, -46.635197]])
  // const [markers, setMarkers] = React.useState([0])
  React.useEffect(() => {
    try {
      const arr = [...posicao.l]
      setCoordinates(arr.reduce((acc, cur) => {
        return [
          ...acc,
          ...cur.vs.map((el) => [el.py, el.px])
        ]
      },[]))
    }
    catch {
      return
    }
  }, [posicao])
  return (
    <Map height={425} defaultCenter={[-23.618237, -46.635197]} defaultZoom={10}>
      {coordinates.map((coord, index) => (
        <Marker key={index} width={25} anchor={[coord[0], coord[1]]} />
      ))}
    </Map>
  )
}

const MapStateToProps = (state) => ({
  posicao: state.posicoesVeiculos.item
})

export default connect(MapStateToProps)(MyMap)