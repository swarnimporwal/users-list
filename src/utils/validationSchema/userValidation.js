import * as Yup from 'yup';

const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

const userValidation = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    username: Yup.string().required(),
    mobile: Yup.string().length(10).matches(phoneRegExp, 'Phone number is not valid').required(),
    key: Yup.string().required(),
    password: Yup.string().required(),
})

export default userValidation