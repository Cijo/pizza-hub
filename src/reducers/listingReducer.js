import { LOAD_PIZZAS, 
    LOAD_PIZZAS_FAILURE, 
    LOAD_PIZZAS_STARTED, 
    LOAD_PIZZAS_SUCCESS,
    PIZZAS_SELECTED } from '../actions/listingActions';

const INITIAL_STATE = {
    products: null,
    layout: 'grid',
    loading: true,
    first: 0,
    totalRecords: 0,
    cartItems:[]
 };

export default function listingReducer(state = INITIAL_STATE, action) {
    console.log(`Listing Reducer: type: ${action.type} || payload: ${action.payload}`)
switch (action.type) {
    case LOAD_PIZZAS:
        return {
            ...state
        };
    case LOAD_PIZZAS_FAILURE:
        return {
            ...state,
            loading: false,
        };
    case LOAD_PIZZAS_STARTED:
        return {
            ...state,
            loading: true
        };
    case LOAD_PIZZAS_SUCCESS:
        return {
            ...state,
            loading: false,
            ...action.payload
        };
    case PIZZAS_SELECTED:
            let _cartItems = [];
            let isNewItem = true;
            const {bagAction, data} = action.payload;

            if(state.cartItems.length){
                if(bagAction === "add"){
                    //increment quantity if all properties of pizza exist in cart
                    _cartItems = state.cartItems.map( item => {
                        if(item.id === data.id && 
                            item.quantity > 0 && 
                            item.toppings.join() === data.toppings.join() && 
                            item.size === data.size){
                            isNewItem = false;
                            item.quantity += 1; 
                        }
                        return item;
                    });
                } else if(bagAction === "remove"){
                    isNewItem = false;
                    _cartItems = [...state.cartItems];
                    const removeItemIndex = _cartItems.indexOf(data);
                    if(removeItemIndex > -1){
                        _cartItems.splice(removeItemIndex, 1);
                    }
                    
                }
               
            }
            if(isNewItem){
                _cartItems.push(data)
            }
            return {
                ...state,
                cartItems: [..._cartItems]
            }
    default:
        return state;
}
}