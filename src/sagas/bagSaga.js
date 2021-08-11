import { takeEvery, call, put} from "redux-saga/effects";
import listingActions, { LOAD_BAG } from '../actions/bagActions';


const bagSagaHandler = function*(action){

    yield console.log('bag saga called');
}

export default function* bagSaga(){
    console.log('bag saga registered');
    yield takeEvery( LOAD_BAG, bagSagaHandler );
}