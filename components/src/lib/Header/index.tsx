import React from 'react';
import styles from './Header.module.scss';
import PostLoginHeader from './PostLoginHeader';
import PreLoginHeader from './PreLoginHeader';

/* eslint-disable-next-line */
export interface HeaderProps {
  authorized?: boolean;
}

export function Header({authorized}: HeaderProps) {
  return (
    <React.Fragment>
      {authorized ? <PostLoginHeader/> : <PreLoginHeader />}
    </React.Fragment>
  );
}

export default Header;
