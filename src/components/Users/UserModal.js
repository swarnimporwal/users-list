import React from 'react';
import { Formik } from 'formik';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';
import { Grid, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, editUser } from '../../redux/usersSlice';
import userValidation from '../../utils/validationSchema/userValidation';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const UserModal = ({ open, setOpen, data }) => {
    const dispatch = useDispatch();
    const roles = useSelector((state) => {
        return state.roles;
    });
    const initalValues = data
        ? { ...data }
        : { name: '', email: '', username: '', mobile: '', key: '', password: '' }

    return (
        <>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={() => setOpen(false)}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Formik
                            initialValues={initalValues}
                            onSubmit={(values) => {
                                dispatch(data ? editUser({ ...values, id: data.id }) : addUser({ ...values }));
                                setOpen(false)
                            }}
                            validationSchema={userValidation}
                        >
                            {(props) => {
                                const {
                                    values,
                                    touched,
                                    errors,
                                    handleChange,
                                    handleBlur,
                                    handleSubmit,
                                    setFieldValue
                                } = props;
                                return (
                                    <form onSubmit={handleSubmit}>
                                        <Grid container spacing={2} flexDirection="column">
                                            <Typography id="transition-modal-title" variant="h6" component="h2">
                                                {`${data ? 'Update' : 'Add'} Role`}
                                            </Typography>
                                            <TextField
                                                label="Name"
                                                name="name"
                                                value={values.name}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={errors.name && touched.name}
                                                helperText={(errors.name && touched.name) && errors.name}
                                                margin="normal"
                                            />
                                            <TextField
                                                label="Email"
                                                name="email"
                                                value={values.email}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={errors.email && touched.email}
                                                helperText={(errors.email && touched.email) && errors.email}
                                                margin="normal"
                                            />
                                            <TextField
                                                label="User Name"
                                                name="username"
                                                value={values.username}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={errors.username && touched.username}
                                                helperText={(errors.username && touched.username) && errors.username}
                                                margin="normal"
                                            />
                                            <TextField
                                                label="Mobile"
                                                name="mobile"
                                                value={values.mobile}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={errors.mobile && touched.mobile}
                                                helperText={(errors.mobile && touched.mobile) && errors.mobile}
                                                margin="normal"
                                            />
                                            <FormControl fullWidth error={errors.key && touched.key}>
                                                <InputLabel id="key">Role Key</InputLabel>
                                                <Select
                                                    labelId="key"
                                                    id="key"
                                                    value={values.key}
                                                    label="Role Key"
                                                    onChange={(e) => setFieldValue('key', e.target.value)}
                                                    onBlur={handleBlur}
                                                >
                                                    {
                                                        roles.map((role, i) => <MenuItem key={role.label + i} value={role.key}>{role.label}</MenuItem>)
                                                    }
                                                </Select>
                                                {(errors.key && touched.key) && errors.key && <FormHelperText>role key is a required field</FormHelperText>}
                                            </FormControl>
                                            <TextField
                                                label="Password"
                                                name="password"
                                                type="password"
                                                value={values.password}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={errors.password && touched.password}
                                                helperText={(errors.password && touched.password) && errors.password}
                                                margin="normal"
                                            />
                                        </Grid>
                                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: '20px' }}>
                                            <Button variant="contained" type="submit">
                                                Save
                                            </Button>
                                            <Button variant="oulined" onClick={() => setOpen(false)}>
                                                Cancel
                                            </Button>
                                        </Box>
                                    </form>
                                );
                            }}
                        </Formik>
                    </Box>
                </Fade>
            </Modal>
        </>
    )
}

export default UserModal