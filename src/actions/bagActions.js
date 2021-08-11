export const LOAD_BAG = 'LOAD_BAG';
export const LOAD_BAG_STARTED = 'LOAD_BAG_STARTED';
export const LOAD_BAG_SUCCESS = 'LOAD_BAG_SUCCESS';
export const LOAD_BAG_FAILURE = 'LOAD_BAG_FAILURE';
export const BAG_REMOVE_ITEM = 'BAG_REMOVE_ITEM';

const listingActions = {
  loadBag: ()=>{ return {type: LOAD_BAG} },
  loadBagStarted: ()=>{ return {type: LOAD_BAG_STARTED} },
  loadBagSuccess: (data)=>{ return {type: LOAD_BAG_SUCCESS, payload: data} },
  loadBagFailure: (data)=>{ return {type: LOAD_BAG_FAILURE, payload: data} },
  removeItem: (data) => {return {type: BAG_REMOVE_ITEM, payload: data}}
}


 export default listingActions;
