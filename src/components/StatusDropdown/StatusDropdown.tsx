import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import { useQueryClient } from "@tanstack/react-query";
import { FC, useContext, useState } from "react";
import { STATUSES } from "../../constants/constants";
import { TasksContext } from "../../contexts/tasks/tasks.context";
import { IStatusDropdownProps } from "../../interfaces/interfaces";
import { TasksContextType, TaskType } from "../../types/types";
import { updateStorage } from "../../utils/utils";

export const StatusDropdown: FC<IStatusDropdownProps> = ({ id, status }: IStatusDropdownProps ) => {
  //const { tasks, updateStatus } = useContext(TasksContext) as TasksContextType;
  const [statusState, setStatusState] = useState<string>(status);

  const queryClient = useQueryClient();


  const handleStatusChange = (event: SelectChangeEvent) => {
    event.preventDefault();
    const newStatus = event.target.value;
    setStatusState(newStatus);
    //updateStatus(tasks, id, newStatus);
    let tasks = queryClient.getQueryData(['tasks']) as TaskType[];
    const changedTask = tasks.find((task) => task.id === id);
    changedTask!.status = newStatus;

    queryClient.setQueryData(['tasks'], [...tasks.filter((task: TaskType) => task.id !== id), changedTask]);
    //updateStorage("tasks", tasks);
    //setTasks(tasks);
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
          STATUSES.map((status: string, index:number) => {
            return <MenuItem key={index} value={status}>{status.toUpperCase()}</MenuItem>
          })
        }
      </Select>
    </FormControl>
  )
}