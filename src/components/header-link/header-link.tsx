import React from 'react';
import {Link} from 'react-router-dom';

interface Props {
  text: string,
  link: string,
  bg?: object,
  linkClass?: string
}

const HeaderLink = (props: Props) => {
  const {text, link, bg, linkClass}: Props = props;
  const loginClass = linkClass ? `header__${linkClass}` : `header__login`;

  return (
    <Link to={link} className="header__nav-link header__nav-link--profile">
      <div className="header__avatar-wrapper user__avatar-wrapper" style={bg} />
      <span className={loginClass}>{text}</span>
    </Link>
  );
};

export default HeaderLink;
