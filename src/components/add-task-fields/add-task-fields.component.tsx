import { Container, TextField, MenuItem, Button } from "@mui/material"
import { useState } from "react";
import { statuses } from "../../constants/constants"

export const AddTaskFields = () => {
  const [formInput, setFormInput] = useState({
    id: 90,
    name:'',
    description: '',
    status: ''
  }); 


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
        id="input-description" 
        multiline 
        label="Enter full description of task" 
        rows={4}
        value={formInput.description}
        onChange={ event => setFormInput({ ...formInput, description: (event.target as HTMLInputElement).value })}/>
      <TextField
        id="outlined-select-currency"
        select
        label="status"
        defaultValue={"todo"}
        helperText="Please select status of task"
        value={formInput.status}
        onChange={ event => setFormInput({ ...formInput, status: (event.target as HTMLInputElement).value })}
      >
        {
          statuses.map((status: string, index:number) => {
            return <MenuItem key={index} value={status}>{status.toUpperCase()}</MenuItem>
          })
        }
      </TextField>
    </>
        
  )
}
