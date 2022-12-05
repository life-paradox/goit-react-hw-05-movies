import { Outlet } from 'react-router-dom';
import * as SC from './Layout.styles';

const Layout = () => {
  return (
    <div>
      <SC.Nav>
        <SC.NavItem to="/">Home</SC.NavItem>
        <SC.NavItem to="movies">Movies</SC.NavItem>
      </SC.Nav>
      <Outlet />
    </div>
  );
};

export default Layout;
