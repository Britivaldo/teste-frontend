import { INFO_PARADAS } from "../types";
 const initialState = {
   info: []
 }

 export default (state = initialState, {type, payload}) => {
  switch(type) {
    case INFO_PARADAS:
       return {
         ...state,
         info: payload.l[0].vs
      }
    default:
      return state
   }
 }