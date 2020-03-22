import React from 'react'
import ReactDOM from 'react-dom'
import './assets/styles/custom-btsp.scss';
import './assets/styles/styles.scss';
import 'react-toastify/dist/ReactToastify.css';
import App from './app';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import {persistor,store} from './redux/index'

ReactDOM.render(
<Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <App/>
    </PersistGate>
    </Provider>,document.getElementById("app"))