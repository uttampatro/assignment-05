import * as config from '../config/api';
import axios from './axios';

const createUser = async ({ username, mobileNumber, email, address }) => {
    try {
        const response = await axios.post(
            `${config.apiConfig.baseUrl}/v1/createUser`,
            {
                username,
                mobileNumber,
                email,
                address,
            }
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

const getAllUser = async () => {
    try {
        const response = await axios.get(
            `${config.apiConfig.baseUrl}/v1/getUserList`
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

const deleteUser = async id => {
    try {
        const response = await axios.delete(
            `${config.apiConfig.baseUrl}/v1/deleteUser/${id}`
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export { createUser, getAllUser, deleteUser };
