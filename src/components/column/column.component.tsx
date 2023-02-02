import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, MenuItem, TextField } from "@mui/material"
import { Container } from "@mui/system"
import { useContext, useState } from "react"
import { statuses } from "../../constants/constants"
import { TasksContext } from "../../contexts/tasks/tasks.context"
import { IColumnProps } from "../../interfaces/interfaces"
import { TasksContextType, TaskType } from "../../types/types"
import { AddTaskFields } from "../add-task-fields/add-task-fields.component"
import { Task } from "../task/task.component"


export const Column = ({ name }: IColumnProps) => { 
  const { tasks, addTask, maxId } = useContext(TasksContext) as TasksContextType;
  const [open, setOpen] = useState(false);
  const [formInput, setFormInput] = useState({
    id: maxId,
    name:'',
    description: '',
    status: ''
  });
  

  const handleAddTask = () => {
    addTask(tasks, formInput);
    setOpen(false);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  
  return(
    <Container disableGutters
      sx={{
      p:1,
      width:"25%",
      minHeight:'80vh',
      flexGrow:1,
      border:"2px solid black",
      borderRadius:"8px"
    }}>
      <h3 className="title">{name}</h3>
      <div>
        {
          tasks
            .filter((task: TaskType):boolean => task.status === name)
            .map((task: TaskType) => {
              return(
                <Task key={task.id} task={task}/>
              )
            })
        }
      </div>
      <Button type="submit" onClick={handleClickOpen} variant="outlined" size="small">+ Add task</Button>
      <div>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add task</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To add task, please fill fields below
            </DialogContentText>
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
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </div>
    </Container>
  )
}