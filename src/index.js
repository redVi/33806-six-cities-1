import React from 'react';
import {render} from 'react-dom';
import {createStore, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {BrowserRouter as Router} from 'react-router-dom';

import {configureAPI} from '@/api';
import {Service} from '@/reducer/data/data';
import reducer from '@/reducer';
import App from '@/components/app/app.jsx';

const hasReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && process.env.NODE_ENV !== `production`;
const api = configureAPI(() => history.pushState(null, null, `/login`));

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
      <Router>
        <App />
      </Router>
    </Provider>,
    document.getElementById(`root`)
);
