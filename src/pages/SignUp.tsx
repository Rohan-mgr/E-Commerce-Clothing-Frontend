import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import LadyImg from '../assets/images/lady.jpg';
import { FaArrowLeft } from '../assets/icons/icons';
import { Formik, Form, FormikErrors } from 'formik';
import { signUpValidationSchema } from '../validation/schemaValidation';
import { signUpCredentialsType } from '../types/types';
import { handleUserRegistration } from '../services/userService';
import Alerts from '../components/common/Alert';
import axios from 'axios';
import { ValidateAxiosError } from '../types/types';

function Copyright(props: any) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {'Copyright © '}
            <Link color="inherit" href="/">
                Ashion
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

interface StateType {
    status: boolean;
    errorMsg: string | undefined;
}

export default function Signup() {
    const navigate = useNavigate();
    const [error, setError] = useState<StateType>({
        status: false,
        errorMsg: '',
    });
    const [showAdditionalSignUpForm, setShowAdditionalSignUpForm] =
        useState(false);

    const handleNextBtn = (
        values: signUpCredentialsType,
        errors: FormikErrors<signUpCredentialsType>
    ) => {
        return (
            values.firstName === '' ||
            values.lastName === '' ||
            values.email === '' ||
            values.password === '' ||
            !!errors.firstName ||
            !!errors.lastName ||
            !!errors.email ||
            !!errors.password
        );
    };

    return (
        <Grid
            container
            component="main"
            sx={{ height: '100vh' }}
            className="overflow-hidden"
        >
            <CssBaseline />
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundImage: `url(${LadyImg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) =>
                        t.palette.mode === 'light'
                            ? t.palette.grey[50]
                            : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            <Grid
                className="relative"
                item
                xs={12}
                sm={8}
                md={5}
                component={Paper}
                elevation={6}
                square
            >
                <Copyright
                    className="absolute bottom-1 left-[50%] -translate-x-2/4"
                    sx={{ mt: 5 }}
                />
                <p
                    onClick={() => navigate('/')}
                    className="flex items-center gap-x-2  text-[#1976d2] mt-6 ml-8 cursor-pointer"
                >
                    <FaArrowLeft /> Home
                </p>
                <CssBaseline />
                <Box
                    sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>

                    <Formik
                        initialValues={{
                            firstName: '',
                            lastName: '',
                            mobile: 0,
                            email: '',
                            password: '',
                            shippingAddress: {
                                address1: '',
                                address2: '',
                                city: '',
                                state: '',
                                postalCode: 0,
                                country: '',
                            },
                        }}
                        validationSchema={signUpValidationSchema}
                        onSubmit={async (
                            values: signUpCredentialsType,
                            { resetForm }
                        ) => {
                            try {
                                const response =
                                    await handleUserRegistration(values);
                                console.log(response, 'signup response >>>');
                                navigate('/login');
                            } catch (err) {
                                console.log(err, 'error in signup form');
                                if (
                                    axios.isAxiosError<
                                        ValidateAxiosError,
                                        Record<string, unknown>
                                    >(err)
                                ) {
                                    const msg = err.response?.data.message;
                                    setError((prevState) => {
                                        return {
                                            ...prevState,
                                            status: true,
                                            errorMsg: msg,
                                        };
                                    });
                                }
                                resetForm();
                                setShowAdditionalSignUpForm(false);
                                throw err;
                            }
                        }}
                    >
                        {({
                            values,
                            handleChange,
                            handleBlur,
                            touched,
                            errors,
                            isSubmitting,
                        }) => (
                            <Form>
                                <Box
                                    className={`${!showAdditionalSignUpForm ? 'translate-x-0' : 'translate-x-[100%] fixed top-0 left-[100%]'} px-[32px] transition-all duration-500 ease-in-out `}
                                    sx={{ mt: 3, textAlign: 'right' }}
                                >
                                    <Alerts
                                        color="error"
                                        severity="error"
                                        errorStatus={error.status}
                                        handleClick={() =>
                                            setError((prevState) => {
                                                return {
                                                    ...prevState,
                                                    status: false,
                                                };
                                            })
                                        }
                                    >
                                        {error?.errorMsg}
                                    </Alerts>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                error={
                                                    touched.firstName &&
                                                    !!errors.firstName
                                                }
                                                autoComplete="given-name"
                                                name="firstName"
                                                required
                                                fullWidth
                                                id="firstName"
                                                value={values.firstName}
                                                label="First Name"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                helperText={
                                                    touched.firstName &&
                                                    errors.firstName
                                                }
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                error={
                                                    touched.lastName &&
                                                    !!errors.lastName
                                                }
                                                required
                                                fullWidth
                                                id="lastName"
                                                label="Last Name"
                                                name="lastName"
                                                value={values.lastName}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                autoComplete="family-name"
                                                helperText={
                                                    touched.lastName &&
                                                    errors.lastName
                                                }
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                error={
                                                    touched.mobile &&
                                                    !!errors.mobile
                                                }
                                                required
                                                fullWidth
                                                id="mobile"
                                                label="Mobile"
                                                name="mobile"
                                                value={
                                                    values.mobile === 0
                                                        ? ''
                                                        : values.mobile
                                                }
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                autoComplete="mobile"
                                                helperText={
                                                    touched.mobile &&
                                                    errors.mobile
                                                }
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                error={
                                                    touched.email &&
                                                    !!errors.email
                                                }
                                                required
                                                fullWidth
                                                id="email"
                                                label="Email Address"
                                                name="email"
                                                value={values.email}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                autoComplete="email"
                                                helperText={
                                                    touched.email &&
                                                    errors.email
                                                }
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                error={
                                                    touched.password &&
                                                    !!errors.password
                                                }
                                                required
                                                fullWidth
                                                name="password"
                                                label="Password"
                                                type="password"
                                                id="password"
                                                value={values.password}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                autoComplete="new-password"
                                                helperText={
                                                    touched.password &&
                                                    errors.password
                                                }
                                            />
                                        </Grid>
                                    </Grid>
                                    <Button
                                        className="ml-[80%]"
                                        variant="contained"
                                        onClick={() =>
                                            setShowAdditionalSignUpForm(true)
                                        }
                                        sx={{ mt: 3, mb: 2 }}
                                        disabled={handleNextBtn(values, errors)}
                                    >
                                        Next
                                    </Button>
                                    <Grid container justifyContent="flex-end">
                                        <Grid item>
                                            <Link href="/login" variant="body2">
                                                Already have an account? Sign in
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box
                                    className={`${showAdditionalSignUpForm ? 'translate-x-0' : 'translate-x-[100%] fixed top-0 left-[100%]'} px-[32px] transition-all duration-500 ease-in-out `}
                                    sx={{ mt: 3, textAlign: 'right' }}
                                >
                                    <p className="text-left mb-5 text-[#8f9092]">
                                        These fields are optional. You can
                                        update it later.
                                    </p>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                autoComplete="address1"
                                                name="shippingAddress.address1"
                                                value={
                                                    values.shippingAddress
                                                        ?.address1
                                                }
                                                fullWidth
                                                id="address1"
                                                label="Address 1"
                                                onChange={handleChange}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                fullWidth
                                                id="address2"
                                                label="Address 2"
                                                name="shippingAddress.address2"
                                                value={
                                                    values.shippingAddress
                                                        ?.address2
                                                }
                                                onChange={handleChange}
                                                autoComplete="address2"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                autoComplete="city"
                                                name="shippingAddress.city"
                                                value={
                                                    values.shippingAddress?.city
                                                }
                                                onChange={handleChange}
                                                fullWidth
                                                id="city"
                                                label="City"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                fullWidth
                                                id="state"
                                                label="State"
                                                name="shippingAddress.state"
                                                value={
                                                    values.shippingAddress
                                                        ?.state
                                                }
                                                onChange={handleChange}
                                                autoComplete="state"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                autoComplete="postalCode"
                                                name="shippingAddress.postalCode"
                                                value={
                                                    values.shippingAddress
                                                        ?.postalCode === 0
                                                        ? ''
                                                        : values.shippingAddress
                                                              ?.postalCode
                                                }
                                                onChange={handleChange}
                                                fullWidth
                                                id="postalCode"
                                                label="Postal Code"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                fullWidth
                                                label="Country"
                                                id="country"
                                                name="shippingAddress.country"
                                                value={
                                                    values.shippingAddress
                                                        ?.country
                                                }
                                                onChange={handleChange}
                                                autoComplete="country"
                                            />
                                        </Grid>
                                    </Grid>
                                    <Button
                                        className="ml-[80%]"
                                        variant="contained"
                                        onClick={() =>
                                            setShowAdditionalSignUpForm(false)
                                        }
                                        sx={{ mt: 3, mb: 2, mr: 2 }}
                                    >
                                        Back
                                    </Button>
                                    <Button
                                        type="submit"
                                        className="ml-[80%]"
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        {isSubmitting
                                            ? 'Submitting...'
                                            : 'Skip & Continue'}
                                    </Button>
                                    <Grid container justifyContent="flex-end">
                                        <Grid item>
                                            <Link href="/login" variant="body2">
                                                Already have an account? Sign in
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Form>
                        )}
                        {/* )} */}
                    </Formik>
                </Box>
            </Grid>
        </Grid>
    );
}
