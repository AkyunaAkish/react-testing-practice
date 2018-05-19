import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import './sass/style.scss';
import App from './components/App/App';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

// create store and enable redux chrome extension
const store = createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>, document.querySelector('#app')
);