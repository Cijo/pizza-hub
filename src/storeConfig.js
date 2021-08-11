import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import "regenerator-runtime/runtime";
import reducers from "./reducers";
import rootSaga from './sagas';

export const INITIAL_STATE = {
   listingReducer: {
      loading: false,
      response: null,
      data: null
   },
   bagReducer:{
      loading: false,
      response: null,
      data: null
   }
};

const storeConfig = (init = INITIAL_STATE) => { 
   const sagaMiddleware = createSagaMiddleware();
   const store = createStore(reducers, init, applyMiddleware(sagaMiddleware));
   sagaMiddleware.run(rootSaga);
   return store;
};

export default storeConfig;