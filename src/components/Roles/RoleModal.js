import React from 'react';
import { Formik } from 'formik';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addRole, editRole } from '../../redux/rolesSlice';
import roleValidation from '../../utils/validationSchema/roleValidation';

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

const RoleModal = ({ open, setOpen, data }) => {
    const dispatch = useDispatch();
    const initalValues = data
        ? { label: data.label, key: data.key }
        : { label: '', key: '' }

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
                                dispatch(data ? editRole({...values, id: data.id }) : addRole({ ...values }));
                                setOpen(false)
                            }}
                            validationSchema={roleValidation}
                        >
                            {(props) => {
                                const {
                                    values,
                                    touched,
                                    errors,
                                    handleChange,
                                    handleBlur,
                                    handleSubmit,
                                } = props;
                                return (
                                    <form onSubmit={handleSubmit}>

                                        <Grid container spacing={2} flexDirection="column">
                                            <Typography id="transition-modal-title" variant="h6" component="h2">
                                                {`${data ? 'Update' : 'Add'} Role`}
                                            </Typography>
                                            <TextField
                                                label="Role Label"
                                                name="label"
                                                value={values.label}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={errors.label && touched.label}
                                                helperText={(errors.label && touched.label) && errors.label}
                                                margin="normal"
                                            />
                                            <TextField
                                                label="Role Key"
                                                name="key"
                                                value={values.key}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={errors.key && touched.key}
                                                helperText={(errors.key && touched.key) && errors.key}
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

export default RoleModal