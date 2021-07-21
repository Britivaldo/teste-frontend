import { combineReducers } from 'redux';
import posicoesVeiculos from './posicoesVeiculos';
import infoLinhas from './infoLinhas'
import searchBar from './searchBar';
import infoPrevChegada from './infoPrevChegada';
import infoParada from './infoParada';

const rootReducer = combineReducers({
  posicoesVeiculos, searchBar, infoLinhas , infoPrevChegada, infoParada
});

export default rootReducer;