import { ColumnType } from "../../types/types"
import { ColumnItem } from "../column-item/column-item.component";

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
]



export const Columns = () => {
  return(
    <div>
      <h1>Columns</h1>
      {
        COLUMN_ARRAY.map((column: ColumnType) => {
          const { key, name } = column;
          return <ColumnItem key={key} name={name} />
        })
      }
    </div>
  )
}