import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import { FC, useContext, useState } from "react";
import { statuses } from "../../constants/constants";
import { TasksContext } from "../../contexts/tasks/tasks.context";
import { IStatusInputProps } from "../../interfaces/interfaces";
import { TasksContextType } from "../../types/types";

export const StatusInput: FC<IStatusInputProps> = ({ id, status }: IStatusInputProps ) => {
  const { tasks, updateStatus } = useContext(TasksContext) as TasksContextType;
  const [statusState, setStatusState] = useState(status);


  const handleStatusChange = (event: SelectChangeEvent) => {
    event.preventDefault();
    const newStatus = event.target.value;
    setStatusState(newStatus);
    updateStatus(tasks, id, newStatus);
  }

  return(
    <FormControl sx={{ m: 1, width: '90%' }} size="small">
      <InputLabel id="demo-select-small">status</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={statusState}
        defaultValue={status}
        label="status"
        onChange={handleStatusChange}
        sx={{fontSize:12}}
      >
        {
          statuses.map((status: string, index:number) => {
            return <MenuItem key={index} value={status}>{status.toUpperCase()}</MenuItem>
          })
        }
      </Select>
    </FormControl>
  )
}