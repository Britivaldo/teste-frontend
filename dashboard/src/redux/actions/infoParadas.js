import { INFO_PARADAS, SEARCH_INFO_PARADAS, SEARCH_INFO_PARADAS_MAP } from "../types";
import { fetchBuscarParadas } from "../../services/API/infoParadasAPI"; 

const actionInfoParada = (payload) => ({
  type: INFO_PARADAS,
  payload
})

export const actionSearchInfoParada = () => ({
  type: SEARCH_INFO_PARADAS
})

export const actionSearchInfoParadaMap = () => ({
  type: SEARCH_INFO_PARADAS_MAP
})

export function actionFetchInfoParada(value) {
  return (dispatch) => fetchBuscarParadas(value)
    .then((res) => dispatch(actionInfoParada(res)))
}