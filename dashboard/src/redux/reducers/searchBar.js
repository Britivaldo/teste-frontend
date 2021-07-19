import { SEARCH_POSICAO_LINHA } from "../types";
const initialState = {
  tipo: 'Pesquisar'
}
const foo = (state = initialState, {type}) => {
  switch(type) {
    case SEARCH_POSICAO_LINHA:
      return {
        tipo: "Pesquisar Posições por Linha",
        action: "buscar_posicao_linha"
      }
    default: 
      return state
  }
}

export default foo;