import { takeEvery, call, put} from "redux-saga/effects";
import listingActions, { LOAD_PIZZAS } from '../actions/listingActions';
import { getProducts } from '../apis/listingApi';

const listingSagaHandler = function*(action){

    yield put( listingActions.loadPizzaStarted());

    const products = yield call( getProducts );

    if(products && products.length){
        yield put(listingActions.loadPizzaSuccess({products: [...products], totalRecords: products.length}));
    } else {
        yield put(listingActions.loadPizzaFailure());
    }
}

export default function* listingSaga(){
    console.log('listing saga registered');
    yield takeEvery( LOAD_PIZZAS, listingSagaHandler );
}