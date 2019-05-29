import React from 'react';
import {render} from 'react-dom';
import {createStore, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import {configureAPI} from '@/api';
import App from '@/components/app/app.jsx';
import {reducer, Service} from '@/reducer';

const hasReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && process.env.NODE_ENV !== `production`;
const api = configureAPI((...args) => store.dispatch(...args));

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        hasReduxDevTools ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

store.dispatch(Service.fetchOffers);

render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById(`root`)
);
