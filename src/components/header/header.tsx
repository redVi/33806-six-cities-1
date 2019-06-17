import React from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "@/api/config";
import HeaderLink from "@/components/header-link/header-link";

interface Props {
  user: {
    avatarUrl?: string;
    email?: string;
  };
}

const Header = ({ user }: Props) => {
  const isNotEmpty = user && Object.keys(user).length;
  const userBgImage = isNotEmpty ? { backgroundImage: `url(${BASE_URL}${user.avatarUrl})` } : {};
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

export default Header;
