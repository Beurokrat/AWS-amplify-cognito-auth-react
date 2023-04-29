import { Nav, Logo, MenuList, MenuItem } from './style.js';

import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
      {/* <ul class='menu-bar'>
        <li>Hire</li>
        <li>Candidate</li>
        <li>Login</li>
      </ul> */}
      <Nav>
        <Logo>
          <Link to='/'>SaleSphere</Link>
        </Logo>
        <MenuList>
          <MenuItem>
            <Link to='/about'>About</Link>
          </MenuItem>
          <MenuItem>
            {/* <Link to='/login'>Login</Link> */}
            <Link to='/hr-dashboard'>Login</Link>
          </MenuItem>
        </MenuList>
      </Nav>
    </>
  );
};

export default Header;
