import { Container, Toolbar } from "@mui/material"
import { NAVBAR_ITEMS } from "../../constants/constants"
import { NavbarItemType } from "../../types/types"
import { NavbarItem } from "../../components/Navbar/NavbarItem"


export const NavbarItems = () => {  
  return(
    <Container disableGutters>
      <Toolbar>
        {
          NAVBAR_ITEMS.map((item: NavbarItemType):JSX.Element => {
            return(
              <NavbarItem key={item.id} item={item} />
            )
          })
        }
      </Toolbar>
    </Container>
  )
}