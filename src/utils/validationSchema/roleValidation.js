import * as Yup from 'yup';

const roleValidation = Yup.object().shape({
    label: Yup.string().required(),
    key: Yup.string().required(),
})

export default roleValidation