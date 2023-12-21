import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import UserModal from './UserModal';
import { deleteUser } from '../../redux/usersSlice';

const initalValues = {
    show: false,
    row: null,
    isEdit: false
}
const UsersList = ({ users }) => {
    const [dialogArgs, setDialogArgs] = useState(initalValues)
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteUser({ id: dialogArgs.row.id}))
        setDialogArgs(initalValues)
    }

    const handleClose = () => {
        setDialogArgs(initalValues)
    }

    return (
        <>
        <TableContainer component={Paper} sx={{ marginTop: 5 }}>
            <Table aria-label="simple table">
                <TableHead sx={{ backgroundColor: "aliceblue" }}>
                    <TableRow>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Email</TableCell>
                        <TableCell align="center">Username</TableCell>
                        <TableCell align="center">Mobile</TableCell>
                        <TableCell align="center">Role Key</TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user) => (
                        <TableRow
                            key={user.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="center">{user.name}</TableCell>
                            <TableCell align="center">{user.email}</TableCell>
                            <TableCell align="center">{user.username}</TableCell>
                            <TableCell align="center">{user.mobile}</TableCell>
                            <TableCell align="center">{user.key}</TableCell>
                            <TableCell align="right">
                                <Button variant="outlined" color="error" onClick={() => setDialogArgs({
                                    show: true,
                                    row: user,
                                    isEdit: false
                                })}>Delete</Button>
                                <Button variant="outlined" sx={{ marginLeft: 2 }} onClick={() => setDialogArgs({
                                    show: true,
                                    row: user,
                                    isEdit: true
                                })}>edit</Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        <Dialog
        open={dialogArgs.show && !dialogArgs.isEdit}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Please confirm"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           Are you sure, you want to delete the selected user?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleDelete} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      <UserModal open={dialogArgs.show && dialogArgs.isEdit} setOpen={setDialogArgs} data={dialogArgs.row} />
      </>
    )
}

export default UsersList