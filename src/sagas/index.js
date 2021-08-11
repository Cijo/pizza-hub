import { all } from 'redux-saga/effects';
import listingSaga from './listingSaga';
import bagSaga from './bagSaga';


export default function* rootSaga() {
  yield all([
    listingSaga(),
    bagSaga()
  ]);
}
