import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/components/app/app.jsx';

const offers = require(`@/mocks/offers`).offers;

ReactDOM.render(<App offers={offers} />, document.getElementById(`root`));
