import { POSICAO_VEICULOS_1, POSICAO_VEICULOS_2, SEARCH_POSICAO_LINHA } from "../types";
import { fetchPosicao, fetchPosicaoLinha } from "../../services/API/posicaoVeiculosAPI";

const actionPosicaoVeiculos1 = (payload) => ({
  type: POSICAO_VEICULOS_1,
  payload
})

const actionPosicaoVeiculos2 = (payload) => ({
  type: POSICAO_VEICULOS_2,
  payload
})

export const actionSearchBarPosicaoLinha = () => ({
  type: SEARCH_POSICAO_LINHA,
})

export function posicaoVeiculos() {
  return (dispatch) => fetchPosicao()
    .then((res) => dispatch(actionPosicaoVeiculos1(res)))
}

export function posicaoVeiculosLinha(value) {
  return (dispatch) => fetchPosicaoLinha(value)
    .then((res) => dispatch(actionPosicaoVeiculos2(res)))
}