import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import { FC, useState } from "react";
import { IModalMessageProps } from "../../interfaces/interfaces";

export const ModalMessage:FC<IModalMessageProps> = ({ title, description, open, handleClose }: IModalMessageProps) => {
    return(
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>
          { title }
        </DialogTitle>
        <DialogContent>
          { description }
        </DialogContent>
      </Dialog>
  )
}