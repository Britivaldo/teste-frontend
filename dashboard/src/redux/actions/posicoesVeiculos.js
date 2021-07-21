import { POSICAO_VEICULOS_1, POSICAO_VEICULOS_2, POSICAO_VEICULOS_3, SEARCH_POSICAO_GARAGEM, SEARCH_POSICAO_LINHA } from "../types";
import { fetchPosicao, fetchPosicaoGaragem, fetchPosicaoLinha } from "../../services/API/posicaoVeiculosAPI";

const actionPosicaoVeiculos1 = (payload) => ({
  type: POSICAO_VEICULOS_1,
  payload
})

const actionPosicaoVeiculos2 = (payload) => ({
  type: POSICAO_VEICULOS_2,
  payload
})

const actionPosicaoVeiculos3 = (payload) => ({
  type: POSICAO_VEICULOS_3,
  payload
})

export const actionSearchBarPosicaoLinha = () => ({
  type: SEARCH_POSICAO_LINHA,
})

export const actionSearchBarPosicaoGaragem = () => ({
  type: SEARCH_POSICAO_GARAGEM,
})


export function posicaoVeiculos() {
  return (dispatch) => fetchPosicao()
    .then((res) => dispatch(actionPosicaoVeiculos1(res)))
}

export function posicaoVeiculosLinha(value) {
  return (dispatch) => fetchPosicaoLinha(value)
    .then((res) => dispatch(actionPosicaoVeiculos2(res)))
}

export function posicaoVeiculosGaragem(value) {
  return (dispatch) => fetchPosicaoGaragem(value)
    .then((res) => dispatch(actionPosicaoVeiculos3(res)))
}