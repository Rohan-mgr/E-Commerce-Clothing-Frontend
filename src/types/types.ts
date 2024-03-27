import { AxiosError } from 'axios';

export interface signUpCredentialsType {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    mobile: number;
    shippingAddress?: {
        address1: string;
        address2: string | undefined;
        city: string;
        state: string;
        postalCode: number;
        country: string;
    };
}

export interface ValidateAxiosError extends AxiosError {
    status: number;
    message: string;
}
