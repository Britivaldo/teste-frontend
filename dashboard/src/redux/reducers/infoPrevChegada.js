import { INFO_PREV } from "../types";
 const initialState = {
   info: []
 }

 export default (state = initialState, {type, payload}) => {
  switch(type) {
    case INFO_PREV:
       return {
         ...state,
         info: payload.l[0].vs
      }
    default:
      return state
   }
 }