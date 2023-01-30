import { Container, Toolbar } from "@mui/material"
import React from "react"
import { navbarItems } from "../../constants/constants"
import { NavbarItemType } from "../../types/types"
import { NavbarItem } from "../navbar-item/navbar-item.component"

export const NavbarItems = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  
  return(
    <Container>
      <Toolbar disableGutters>
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