import AppBar from '@mui/material/AppBar';
import { NavbarItems } from '../navbar-items/navbar-items.component';


function Navbar() {
  return (
    <AppBar component="nav">
      <NavbarItems />
    </AppBar>
  );
}
export default Navbar;