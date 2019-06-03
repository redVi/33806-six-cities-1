import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {BASE_URL} from '@/api/config';
import HeaderLink from '@/components/header-link/header-link.jsx';

const MainHeader = (props) => {
  const {user} = props;
  const isNotEmpty = Object.keys(user).length;
  const userBgImage = user.avatarUrl ? {backgroundImage: `url(${BASE_URL}${user.avatarUrl})`} : {};
  const headerLink = isNotEmpty
    ? <HeaderLink
      text={user.email}
      link="/favorites"
      bg={userBgImage}
      linkClass="user-name user__name" />
    : <HeaderLink text="Sign in" link="/login" />;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to="/" className="header__logo-link header__logo-link--active">
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                {headerLink}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

MainHeader.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
    name: PropTypes.name,
    avatarUrl: PropTypes.string,
    isPro: PropTypes.bool
  })
};

export default MainHeader;
