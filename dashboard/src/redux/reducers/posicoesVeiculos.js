import { POSICAO_VEICULOS_1, POSICAO_VEICULOS_2, POSICAO_VEICULOS_3, INFO_PARADAS } from "../types";
const initialState = {
  isLoading: false
}
export default (state = initialState, {type, payload}) => {
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
    case POSICAO_VEICULOS_3:
      return {
        ...state,
        item: payload
      }
    case INFO_PARADAS:
      return {
        ...state,
        item: payload
      }
    default: 
      return state
  }
}
