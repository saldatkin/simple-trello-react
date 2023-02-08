import AppBar from '@mui/material/AppBar';
import { NavbarItems } from './NavbarItems';


function Navbar() {
  return (
    <AppBar component="nav">
      <NavbarItems />
    </AppBar>
  );
}
export default Navbar;