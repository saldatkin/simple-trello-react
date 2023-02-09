import { Container, Button, Dialog, DialogContent, DialogTitle } from "@mui/material"
import { useContext, useState } from "react";
import { INITIAL_STRINGS } from "../../constants/constants";
import { TasksContext } from "../../contexts/tasks/tasks.context";
import { TasksContextType, TaskType } from "../../types/types";
import { AddTaskFields } from "../../components/AddTaskForm/AddTaskForm";
import { useQueryClient } from "@tanstack/react-query";
import { isFormIncomplete } from "../../utils/utils";


export const AddTask = () => {
  //const { tasks, addTask, /* maxId */ } = useContext(TasksContext) as TasksContextType; //убрать
  const queryClient = useQueryClient();

  const [formInput, setFormInput] = useState<TaskType>({ ...INITIAL_STRINGS, id: queryClient.getQueryData(['maxId'])!}); 
  const [openRequired, setOpenRequired] = useState<boolean>(false);
  const [openSuccess, setOpenSuccess] = useState<boolean>(false);


  const handleCloseRequired = () => {
    setOpenRequired(false);
  }
  const handleCloseSuccess = () => {
    setOpenSuccess(false);
  }

  
  const handleAddTask = () => {
    const isAnyFieldEmpty = isFormIncomplete(formInput);
  
    if(isAnyFieldEmpty){
      setOpenRequired(true);
    } else {
      const oldTasks = queryClient.getQueryData(['tasks']) as TaskType[];
      const oldMaxId = queryClient.getQueryData(['maxId']) as number || 0;

      if(oldTasks.length){
        queryClient.setQueryData(['tasks'], [...oldTasks, formInput])
      } else{
        queryClient.setQueryData(['tasks'], [formInput])
      }
      queryClient.setQueryData(['maxId'], oldMaxId + 1);
      //addTask(queryClient.getQueryData(['tasks'])!, formInput);
      setOpenSuccess(true);
      setFormInput({ ...INITIAL_STRINGS, id: queryClient.getQueryData(['maxId'])!});
    }
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
          <Dialog onClose={handleCloseRequired} open={openRequired}>
            <DialogTitle>
              Your task has empty fields
            </DialogTitle>
            <DialogContent>
              Please, fill all the fields.
            </DialogContent>
          </Dialog>
          <Dialog onClose={handleCloseSuccess} open={openSuccess}>
            <DialogTitle>
              <strong>Your task was successfully added!</strong>
            </DialogTitle>
          </Dialog>
        </Container>
      </form>
    </>
  )  
}