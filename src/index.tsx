import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {createStore, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import reducer from '@/reducer/reducer';
import App from '@/components/app/app';

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;
const hasReduxDevTools = composeEnhancers && process.env.NODE_ENV !== `production`;
const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk),
        hasReduxDevTools ? composeEnhancers() : (f) => f
    )
);

export default render((
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
), document.getElementById(`root`) as HTMLElement);
