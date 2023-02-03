import { Container } from "@mui/system";
import { statuses } from "../../constants/constants";
import { Column } from "../column/column.component";


export const Columns = () => {
  return(
    <>
      <h1>Columns</h1>
      {
        <Container disableGutters 
          sx={{ display: 'flex', gap:1, flexDirection: {  xs: "column",sm: "column", md: "row", lg: "row", xl: "row",} }}>
            {
              statuses.map((status: string, index: number) => {
                return <Column key={index} name={status}/>
              })
            }
        </Container>
      }
    </>
  )
};