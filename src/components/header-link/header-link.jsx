import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const HeaderLink = (props) => {
  const {text, link, bg, linkClass} = props;
  const loginClass = linkClass ? `header__${linkClass}` : `header__login`;

  return (
    <Link to={link} className="header__nav-link header__nav-link--profile">
      <div className="header__avatar-wrapper user__avatar-wrapper" style={bg} />
      <span className={loginClass}>{text}</span>
    </Link>
  );
};

HeaderLink.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  bg: PropTypes.object,
  linkClass: PropTypes.string
};

export default HeaderLink;
