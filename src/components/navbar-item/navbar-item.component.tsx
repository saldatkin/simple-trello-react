import { Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { NavbarItemType } from "../../types/types"

export const NavbarItem = ({ item }: { item: NavbarItemType}) => {
  return(
    <Link to={`${item.route}`}>
      <Typography sx={{
        mr:2
      }}>
        {item.name}
      </Typography>
    </Link>
    
  )
}