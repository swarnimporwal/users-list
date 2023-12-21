import { useState } from "react";
import { useSelector } from "react-redux";
import { Typography, Button } from "@mui/material"

import Box from "@mui/material/Box"
import Paper from '@mui/material/Paper';
import UserModal from "./UserModal";
import UsersList from "./UsersList";

const Users = () => {
    const [open, setOpen] = useState(false);
    const {users, roles} = useSelector((state) => state)

    return (<>
        <Paper sx={{ p: 5, width: "100%", maxWidth: '800px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6" component="h2">Users List</Typography>
                <Button variant="contained" onClick={() => setOpen(true)} disabled={!roles.length}>
                    Add User
                </Button>
            </Box>
            {
                users.length ? <UsersList users={users} /> : <Typography variant="body1" component="h2" textAlign="center" sx={{ marginTop: 10 }}>
                    {roles.length ? 'No users to display' :
                        'Please add user role, to add new user'
                    }</Typography>
            }
        </Paper>
        <UserModal open={open} setOpen={setOpen} />
    </>)
}

export default Users