import axios from "axios";
import Cookies from "js-cookie";

const urlAPI = "http://localhost:8000/";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = urlAPI;


export const getCollaborations = async () => {
    try {
        const response = await axios.get(`api/collaboration-proposals`)
        return response.data.data;
    } catch (error) {
        throw error.response.data;
    }
};


export const registerNewUser = async (userData) => {
    try {
        const response = await axios.post(`api/register`, userData);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error.response;
    }
};

export const loginUser = async (userData) => {
    try {
        const response = await axios.post(`api/login`, userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const logoutUser = async (authToken) => {
    try {
        const response = await axios.post('api/logout', {}, {
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        });
        console.log(response.data.message);
    } catch (error) {
        console.error('Error al cerrar sesión:', error.response.data);
    }
}


export const createNewProfile = async (userData) => {
    try {
        const token = Cookies.get('laravel_session')
        const headers = {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
        }

        const response = await axios.post(`api/profile`, userData, { headers });

        return response.data;
    } catch (error) {
        console.error('Error al crear el perfil', error);
        throw error.response;
    }
};


export const getProfiles = async () => {
    try {
        const response = await axios.get(`api/profile`)
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};


export const getProfileById = async (userId) => {
    try {
        const token = Cookies.get('laravel_session');
        const headers = { Authorization: `Bearer ${token}` };

        const response = await axios.get(`api/profile/${userId}`, { headers });

        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};


export const getMyCollaborations = async () => {
    try {
        const token = Cookies.get('laravel_session');
        const headers = { Authorization: `Bearer ${token}` };

        const response = await axios.get(`api/my-collaboration-proposals`, { headers });
        return response.data.data;
    } catch (error) {
        throw error.response.data;
    }
};

//Post new collab

export const createNewCollab = async (proposalData) => {
    try {
        const token = Cookies.get('laravel_session');
        const headers = {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
        }

        const response = await axios.post(`api/collaboration-proposals`, proposalData, {headers});
        return response.data;
    } catch (error) {
        console.log(error);
        throw error.response;
    }
};

export const getCollaborationById = async (collabId) => {
    try {
        const response = await axios.get(`api/collaboration-proposals/${collabId}`);
        return response.data.data;
    } catch (error) {
        throw error.response.data;
    }
};