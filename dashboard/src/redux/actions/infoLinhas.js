import { INFO_LINHAS_1, SEARCH_INFO_LINHAS } from "../types";
import { fetchBuscarLinhas } from "../../services/API/infoLinhasAPI";

const actionInfoLinhas1 = (payload) => ({
  type: INFO_LINHAS_1,
  payload
})

export const actionSearchInfoLinha = () => ({
  type: SEARCH_INFO_LINHAS
})

export function actionFetchInfoLinhas1(value) {
  return (dispatch) => fetchBuscarLinhas(value)
    .then((res) => dispatch(actionInfoLinhas1(res)))
}