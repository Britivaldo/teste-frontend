import { 
  SEARCH_POSICAO_LINHA, POSICAO_VEICULOS_1, SEARCH_POSICAO_GARAGEM,
  SEARCH_INFO_LINHAS, SEARCH_INFO_PREV, SEARCH_INFO_PARADAS, SEARCH_INFO_PARADAS_MAP
 } from "../types";
const initialState = {
  showSearchBar: false,
  showInfo: false,
  infoLinha: true,
  infoPrev: false,
  infoParada: false,
}
const foo = (state = initialState, {type}) => {
  switch(type) {
    case SEARCH_POSICAO_LINHA:
      return {
        showSearchBar: true,
        showInfo: false,
        tipo: 'Número da Linha',
        action: "buscar_posicao_linha"
      }
    case SEARCH_POSICAO_GARAGEM:
      return {
        showSearchBar: true,
        showInfo: false,
        tipo: 'Código da Empresa',
        action: "buscar_posicao_garagem"
      }
    case POSICAO_VEICULOS_1:
      return {
        ...state,
        showSearchBar: false,
        showInfo: false
      }

    case SEARCH_INFO_LINHAS:
      return {
        ...state,
        showSearchBar: true,
        showInfo: true,
        infoPrev: false,
        infoParada: false,
        infoLinha: true,
        tipo: 'Nome/Número da Linha',
        action: "pesquisa_linha"
      }
    case SEARCH_INFO_PREV:
      return {
        ...state,
        showSearchBar: true,
        showInfo: true,
        infoLinha: false,
        infoPrev: true,
        infoParada: false,
        tipo: 'Código da Parada',
        action: "pesquisa_previsao"
      }
    case SEARCH_INFO_PARADAS:
      return {
        ...state,
        showSearchBar: true,
        showInfo: true,
        infoLinha: false,
        infoPrev: false,
        infoParada: true,
        tipo: 'Endereço ou localização',
        action: "pesquisa_parada"
      }
    case SEARCH_INFO_PARADAS_MAP:
      return {
        ...state,
        showSearchBar: true,
        showInfo: false,
        tipo: 'Endereço ou localização',
        action: "pesquisa_parada"
      }
    default: 
      return state
  }
}

export default foo;