import { Container } from "@mui/system";
import { Column } from "../../components/Column/Column";
import { STATUSES } from "../../constants/constants";


export const Columns = () => {
  return(
    <>
      <h1>Columns</h1>
      {
        <Container disableGutters 
          sx={{ display: 'flex', gap:1, flexDirection: {  xs: "column",sm: "column", md: "row", lg: "row", xl: "row",} }}>
            {
              STATUSES.map((status: string, index: number) => {
                return <Column key={index} name={status}/>
              })
            }
        </Container>
      }
    </>
  )
};