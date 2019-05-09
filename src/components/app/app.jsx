import React from 'react';
import PropTypes from 'prop-types';

import SvgSprite from '@/components/svg-sprite/svg-sprite.jsx';
import MainHeader from '@/components/main-header/main-header.jsx';
import MainPage from '@/components/main-page/main-page.jsx';

const App = (props) =>
  <div className="page page--gray page--main">
    <SvgSprite />
    <MainHeader />
    <MainPage offers={props.offers} />
  </div>;

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default App;
