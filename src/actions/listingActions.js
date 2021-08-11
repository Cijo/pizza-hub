export const LOAD_PIZZAS = 'LOAD_PIZZAS';
export const LOAD_PIZZAS_STARTED = 'LOAD_PIZZAS_STARTED';
export const LOAD_PIZZAS_SUCCESS = 'LOAD_PIZZAS_SUCCESS';
export const LOAD_PIZZAS_FAILURE = 'LOAD_PIZZAS_FAILURE';
export const PIZZAS_SELECTED = 'PIZZAS_SELECTED';

const listingActions = {
  loadPizza: ()=>{ return {type: LOAD_PIZZAS} },
  loadPizzaStarted: ()=>{ return {type: LOAD_PIZZAS_STARTED} },
  loadPizzaSuccess: (data)=>{ return {type: LOAD_PIZZAS_SUCCESS, payload: data} },
  loadPizzaFailure: (data)=>{ return {type: LOAD_PIZZAS_FAILURE, payload: data} },
  pizzaSelected: (data) => { return {type: PIZZAS_SELECTED, payload: data} }
}


 export default listingActions;
