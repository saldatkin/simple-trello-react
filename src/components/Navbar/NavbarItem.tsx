import { Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { INavbarItemProps } from "../../interfaces/interfaces"

export const NavbarItem = ({ item }: INavbarItemProps) => {
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