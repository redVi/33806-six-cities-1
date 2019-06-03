import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {createStore, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import reducer from '@/reducer';
import App from '@/components/app/app.jsx';

const hasReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && process.env.NODE_ENV !== `production`;
const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk),
        hasReduxDevTools ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    document.getElementById(`root`)
);
