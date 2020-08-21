import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .required('You must enter a name for the order')
        .min(2, "Name must be at least 2 characters long")
})

export default formSchema;