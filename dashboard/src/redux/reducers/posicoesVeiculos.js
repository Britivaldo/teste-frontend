import { POSICAO_VEICULOS_1, POSICAO_VEICULOS_2, SEARCH_POSICAO_LINHA } from "../types";
import { posicaoVeiculosLinha } from "../actions/posicoesVeiculos";
const initialState = {
  showSearchBar: false
}
const foo = (state = initialState, {type, payload}) => {
  switch(type) {
    case POSICAO_VEICULOS_1:
      return {
        ...state,
        item: payload
      }
    case POSICAO_VEICULOS_2:
      return {
        ...state,
        item: payload
      }
    case SEARCH_POSICAO_LINHA:
      return {
        ...state,
        action: posicaoVeiculosLinha,
        tipo: "Linha"
      }
    default: 
      return state
  }
}

export default foo;