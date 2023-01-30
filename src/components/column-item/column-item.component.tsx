import { ColumnType } from "../../types/types"

export const ColumnItem = ({ name }: ColumnType) => {
  return(
    <div>
      <div className="title">{name}</div>
      <div>
        {/*
          store.tasks[name].map((task) => {
            return(
              <Task />
            )
          })
         */}
      </div>
    </div>
  )
}