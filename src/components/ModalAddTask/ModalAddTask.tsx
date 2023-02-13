import { Dialog, DialogTitle, Button, DialogContent, DialogContentText, DialogActions } from "@mui/material"
import { Container } from "@mui/system"
import { FC } from "react"
import { IModalAddTaskProps } from "../../interfaces/interfaces"
import { AddTaskForm } from "../AddTaskForm/AddTaskForm"
import CloseIcon from '@mui/icons-material/Close';

export const ModalAddTask: FC<IModalAddTaskProps> = ({open, handleClose, handleAddTask, setFormInput, formInput}: IModalAddTaskProps) => {
  return(
    <Dialog fullWidth maxWidth="md" open={open} onClose={handleClose}>
      <DialogTitle>
        Add task
        <Button 
          onClickCapture={handleClose}
          sx={{ 
            position:'absolute', 
            top:4, 
            right:4,
            minWidth:48 
          }}>
          <CloseIcon sx={{ width:32}} />
        </Button>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          To add task, please fill fields below
        </DialogContentText>
        <Container sx={{ mt:2, display:'flex', flexDirection:'column', gap:3 }}>
          <AddTaskForm setFormInput={setFormInput} formInput={formInput}/>
          <Button 
            type="submit" 
            onClick={handleAddTask} 
            variant="contained" 
            size="large">
              Add task
          </Button>
        </Container>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  )
}