import { Container, Button } from "@mui/material"
import { useContext, useState } from "react";
import { initialStrings } from "../../constants/constants";
import { TasksContext } from "../../contexts/tasks/tasks.context";
import { TasksContextType, TaskType } from "../../types/types";
import { AddTaskFields } from "../add-task-fields/add-task-fields.component";


export const AddTask = () => {
  const { tasks, addTask, maxId } = useContext(TasksContext) as TasksContextType;
  const initialFormInput: TaskType = { ...initialStrings, id: 1 + maxId};
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
        <Container disableGutters sx={{ mt:2, display:'flex', flexDirection:'column', gap:3 }}>
          <AddTaskFields setFormInput={setFormInput} formInput={formInput}/>
          <Button 
            type="submit" 
            onClick={handleAddTask} 
            variant="contained" 
            size="large">
              Add task
          </Button>
        </Container>
      </form>
    </>
  )  
}