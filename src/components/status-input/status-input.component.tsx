import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import { FC, useState } from "react";
import { statuses } from "../../constants/constants";
import { IStatusInputProps } from "../../interfaces/interfaces";

export const StatusInput: FC<IStatusInputProps> = ({ id, status, tasks, updateTasks }: IStatusInputProps ) => {
  const [statusState, setStatusState] = useState(status);


  const handleStatusChange = (event: SelectChangeEvent) => {
    event.preventDefault();
    const newStatus = event.target.value;
    setStatusState(newStatus);
    updateTasks(tasks, id, newStatus);
  }

  return(
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">status</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={statusState}
        defaultValue={status}
        label="status"
        onChange={handleStatusChange}
      >
        {
          statuses.map((status) => {
            return <MenuItem value={status}>{status.toUpperCase()}</MenuItem>
          })
        }
      </Select>
    </FormControl>
  )
}