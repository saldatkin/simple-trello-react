import { Container, Toolbar } from "@mui/material"
import { navbarItems } from "../../constants/constants"
import { NavbarItemType } from "../../types/types"
import { NavbarItem } from "../navbar-item/navbar-item.component"


export const NavbarItems = () => {  
  return(
    <Container >
      <Toolbar>
        {
          navbarItems.map((item: NavbarItemType):JSX.Element => {
            return(
              <NavbarItem key={item.id} item={item} />
            )
          })
        }
      </Toolbar>
    </Container>
  )
}