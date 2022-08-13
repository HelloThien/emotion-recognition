import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

export default function AlertDialog(props: AlertDialogProps) {

  const { open } = props 
  return (
    <div>

      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Thanks for Your Feedback"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            The dialog will be closed in 10 seconds.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  )
}
interface AlertDialogProps {
  open: boolean
}