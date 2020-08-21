import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .required('You must enter a name for the order')
        .min(2, "Name must be at least 2 characters long"),
    specialInstructions: yup
        .string()
        .notRequired(),
    size: yup
        .string()
        .oneOf(['Small', 'Medium', 'Large'], "You must select a size")
        .required("You must select a size")

})

export default formSchema;