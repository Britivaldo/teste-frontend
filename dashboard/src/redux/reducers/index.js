import { combineReducers } from 'redux';
import posicoesVeiculos from './posicoesVeiculos';
import searchBar from './searchBar';
// import foods from './foods';
// import drinks from './drinks';
// import ingredients from './ingredients';
// import mealsArea from './mealsArea';
// import details from './details';

const rootReducer = combineReducers({
  posicoesVeiculos, searchBar,
});

export default rootReducer;