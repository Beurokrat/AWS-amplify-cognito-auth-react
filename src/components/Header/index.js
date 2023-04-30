import { useEffect, useState } from 'react';
import { Nav, Logo, MenuList, MenuItem } from './style.js';

import { Link } from 'react-router-dom';
const Header = ({ user, signOut }) => {
  const [session, setSession] = useState('LogIn');
  useEffect(() => {
    if (user) setSession('LogOut');
  }, [session]);
  console.log('navigation', user);
  console.log('sess', session);
  return (
    <>
      <Nav>
        <Logo>
          <Link to='/'>SaleSphere</Link>
        </Logo>
        <MenuList>
          <MenuItem>
            <Link to='/about'>About</Link>
          </MenuItem>
          <MenuItem>
            <Link to='/hr-dashboard'>Dashboard</Link>
          </MenuItem>
          <MenuItem>
            <Link  onClick={signOut}>{session}</Link>
          </MenuItem>
        </MenuList>
      </Nav>
    </>
  );
};

export default Header;
