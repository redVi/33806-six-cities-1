import React from 'react';
import {render} from 'react-dom';
import {createStore, compose} from 'redux';
import {Provider} from 'react-redux';

import App from '@/components/app/app.jsx';
import {reducer} from '@/reducer';

const hasReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && process.env.NODE_ENV !== `production`;

const store = createStore(
    reducer,
    compose(hasReduxDevTools ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f)
);

render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById(`root`)
);
