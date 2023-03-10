import { TextField, MenuItem } from "@mui/material";
import { FC } from "react";
import { STATUSES } from "../../constants/constants"
import { IAddTaskFieldsProps } from "../../interfaces/interfaces";

export const AddTaskForm:FC<IAddTaskFieldsProps> = (props: IAddTaskFieldsProps) => {
  const {formInput, setFormInput } = props; 

  return(
    <>
      <TextField 
        required
        id="input-name" 
        multiline 
        label="Enter name of task"
        value={formInput.name}
        onChange={ event => setFormInput({ ...formInput, name: (event.target as HTMLInputElement).value })}/>
      <TextField 
        required
        id="input-description" 
        multiline 
        label="Enter full description of task" 
        rows={4}
        value={formInput.description}
        onChange={ event => setFormInput({ ...formInput, description: (event.target as HTMLInputElement).value })}/>
      <TextField
        required
        id="outlined-select-currency"
        select
        label="status"
        defaultValue={"todo"}
        helperText="Please select status of task"
        value={formInput.status}
        onChange={ event => setFormInput({ ...formInput, status: (event.target as HTMLInputElement).value })}
      >
        {
          STATUSES.map((status: string, index:number) => {
            return <MenuItem key={index} value={status}>{status.toUpperCase()}</MenuItem>
          })
        }
      </TextField>
    </>
  )
}
