import { useState } from "react";
import { useSelector } from "react-redux";
import { Typography, Button } from "@mui/material"

import Box from "@mui/material/Box"
import Paper from '@mui/material/Paper';
import RoleModal from "./RoleModal";
import RolesList from "./RolesList";

const Roles = () => {
    const [open, setOpen] = useState(false);
    const roles = useSelector((state) => {
        return state.roles;
    });

    return (<>
        <Paper sx={{ p: 5, width: "100%", maxWidth: '800px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6" component="h2">Roles List</Typography>
                <Button variant="contained" onClick={() => setOpen(true)}>
                    Add Role
                </Button>
            </Box>
            {
                roles.length ? <RolesList roles={roles} /> : <Typography variant="body1" component="h2" textAlign="center" sx={{ marginTop: 10 }}>No roles to display</Typography>
            }
        </Paper>
        <RoleModal open={open} setOpen={setOpen} />
    </>)
}

export default Roles