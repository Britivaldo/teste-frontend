import { INFO_PREV, SEARCH_INFO_PREV } from "../types";
// import { fetchBuscarLinhas } from "../../services/API/infoLinhasAPI";
import { fetchPrevChegada } from "../../services/API/prevChegadaAPI"

const actionInfoPrevChegada = (payload) => ({
  type: INFO_PREV,
  payload
})

export const actionSearchInfoPrev = () => ({
  type: SEARCH_INFO_PREV
})

export function actionFetchPrevChegada(value) {
  return (dispatch) => fetchPrevChegada(value)
    .then((res) => dispatch(actionInfoPrevChegada(res)))
}