import {createStore,applyMiddleware} from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas/index'
import rootReducer from './reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware=createSagaMiddleware()

const persistConfig = {
    key: 'user',
    storage,
    whitelist: ['user'] 
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer,composeWithDevTools(applyMiddleware(sagaMiddleware)));

export const persistor = persistStore(store)

sagaMiddleware.run(mySaga);



