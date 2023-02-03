import { Container } from "@mui/system";
import { ColumnType } from "../../types/types"
import { Column } from "../column/column.component";


export const COLUMN_ARRAY: ColumnType[] = [
  {
    key: 1,
    name: 'todo',
  },
  {
    key: 2,
    name: 'in progress',
  },
  {
    key: 3,
    name: 'code review',
  },
  {
    key: 4,
    name: 'done',
  },
];


export const Columns = () => {
  return(
    <>
      <h1>Columns</h1>
      {
        <Container disableGutters 
          sx={{ display: 'flex', gap:1, flexDirection: {  xs: "column",sm: "column", md: "row", lg: "row", xl: "row",} }}
          >
          {
            COLUMN_ARRAY.map((column: ColumnType) => {
              const { key, name } = column;
              return <Column key={key} name={name}/>
            })
          }
        </Container>
      }
    </>
  )
};