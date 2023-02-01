import AppBar from '@mui/material/AppBar';
import { NavbarItems } from '../navbar-items/navbar-items.component';

/*
const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
*/

function Navbar() {
  return (
    <AppBar component="nav">
      <NavbarItems />
    </AppBar>
  );
}
export default Navbar;