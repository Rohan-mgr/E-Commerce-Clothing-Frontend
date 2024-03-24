import * as Yup from 'yup';

export const signUpValidationSchema = Yup.object().shape({
    firstName: Yup.string().trim().required('First Name is required'),
    lastName: Yup.string().trim().required('Last Name is required'),
    email: Yup.string()
        .email('Invalid email format')
        .trim()
        .required('Email is required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    // shippingAddress: Yup.object()
    //     .shape({
    //         address1: Yup.string()
    //             .trim()
    //             .required('Address Line 1 is required'),
    //         address2: Yup.string().trim(), // Optional address line 2
    //         city: Yup.string().trim().required('City is required'),
    //         state: Yup.string().trim().required('State is required'),
    //         postalCode: Yup.number()
    //             .positive('Postal code must be a positive number')
    //             .required('Postal Code is required'),
    //         country: Yup.string().trim().required('Country is required'),
    //     }),
});
