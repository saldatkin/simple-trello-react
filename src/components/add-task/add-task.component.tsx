import { Container, Button, MenuItem, TextField } from "@mui/material"
import { useContext, useState } from "react";
import { statuses } from "../../constants/constants";
import { TasksContext } from "../../contexts/tasks/tasks.context";
import { TasksContextType } from "../../types/types";




export const AddTask = () => {
  const { tasks, addTask, maxId } = useContext(TasksContext) as TasksContextType;

  const initialFormInput = {
    id: 1 + maxId,
    name:'',
    description: '',
    status: ''
  };
  const [formInput, setFormInput] = useState(initialFormInput); 


  const handleAddTask = () => {
    addTask(tasks, formInput);
    setFormInput(initialFormInput);
  }


  return(
    <> 
      <h1>
        Add task
      </h1>
      <form>
        <Container sx={{ mt:2, display:'flex', flexDirection:'column', gap:3 }}>
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
          
          <Button type="submit" onClick={handleAddTask} variant="contained" size="large">Add task</Button>
        </Container>
      </form>
    </>
  )  
}