import { SEARCH_POSICAO_LINHA, POSICAO_VEICULOS_1, SEARCH_POSICAO_GARAGEM } from "../types";
const initialState = {
  showSearchBar: false
}
const foo = (state = initialState, {type}) => {
  switch(type) {
    case SEARCH_POSICAO_LINHA:
      return {
        showSearchBar: true,
        tipo: 'Número da Linha',
        action: "buscar_posicao_linha"
      }
    case SEARCH_POSICAO_GARAGEM:
      return {
        showSearchBar: true,
        tipo: 'Código da Empresa',
        action: "buscar_posicao_garagem"
      }
    case POSICAO_VEICULOS_1:
      return {
        ...state,
        showSearchBar: false
      }
    default: 
      return state
  }
}

export default foo;