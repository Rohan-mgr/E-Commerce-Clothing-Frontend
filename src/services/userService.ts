import { signUpCredentialsType } from '../types/types';
import { endPoints } from '../helper/endpoint';
import { api } from '../helper/axios';

export const handleUserRegistration = async (values: signUpCredentialsType) => {
    const URL = endPoints.register;
    const response = await api.post(URL, values);
    return response;
};
