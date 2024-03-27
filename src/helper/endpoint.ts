const baseURL = import.meta.env.VITE_APP_BASE_URL;

export const endPoints = {
    register: `${baseURL}/user`,
    login: `${baseURL}/user/login`,
};
