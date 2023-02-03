import { Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { NavbarItemType } from "../../types/types"

export const NavbarItem = ({ item }: { item: NavbarItemType}) => {
  return(
    <Link style={{ color: 'white', textDecoration: 'none' }} to={`${item.route}`}>
      <Typography sx={{
        mr:2,
        fontSize: 20
      }}
      >
        {item.name}
      </Typography>
    </Link>
    
  )
}