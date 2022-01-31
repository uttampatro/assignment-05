import * as config from '../config/api';
import axios from './axios';

const login = async ({ email, password }) => {
    const response = await axios.post(`${config.apiConfig.baseUrl}/v1/login`, {
        email,
        password,
    });
    if (response.data) {
        localStorage.setItem(
            'accessToken',
            JSON.stringify(response.data.accessToken)
        );
    }
    console.log(response.data);
    return response.data;
};

const logout = async () => {
    try {
        localStorage.clear();
    } catch (err) {
        console.log(err);
    }
};

export { login, logout };
