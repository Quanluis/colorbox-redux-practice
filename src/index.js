import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import provider
import provider from 'react-redux';
//import stores
import store from './store';


ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider >, document.getElementById('root'));
    registerServiceWorker();

