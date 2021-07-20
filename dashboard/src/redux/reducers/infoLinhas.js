import { INFO_LINHAS_1 } from "../types";
 const initialState = {
   info: []
 }

 export default (state = initialState, {type, payload}) => {
  switch(type) {
    case INFO_LINHAS_1:
       return {
         ...state,
         info: payload
      }
    default:
      return state
   }
 }