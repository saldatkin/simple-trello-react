import { Container } from "@mui/system"

export const ResponsiveContainer = ({children}:any) => {
  return(
    <Container disableGutters
      sx={{
        p:1,
        width:{  xs: "100%",sm: "90%", md: "80%", lg: "25%", xl: "25%",},
        minHeight:{  xs: "30vh",sm: "30vh", md: "70vh", lg: "80vh", xl: "80vh",},
        flexGrow:1,
        border:"2px solid black",
        borderRadius:"8px"
    }}>
      { children }
    </Container>
  )
}