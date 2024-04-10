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

export const createCollaboration = async (collaborationData, authToken) => {
    try {
        console.log("collaborationData: inicio del axios", collaborationData);
        console.log("authToken: comienzo del axios,  token", authToken);

        const response = await axios.post("/api/marketplace", collaborationData, {
            headers: {
                "X-XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
                Authorization: `Bearer ${authToken}`,
            },
        });

        console.log(response, "respondiendo a creación de colaboración");

        if (response && response.data) {
            console.log("RESPONSE ?? qué llega?:", response.data);
            return response.data;

        } else {
            console.error("La respuesta no contiene datos:", response);
            throw new Error("La respuesta no contiene datos");
        }
    } catch (error) {
        console.error("Error al crear collab:", error);
        throw error;
    }
}

export const updateCollaboration = async (collaborationId, collaborationData) => {
    try {
        const response = await axios.post(`api/marketplace/${collaborationId}`, collaborationData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
}

//delete Collaboration
export const deleteCollaboration = async (collaborationId, authToken) => {
    try {
        const response = await axios.delete(`api/marketplace/${collaborationId}`, collaborationId, {
            headers: {
                "X-XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
                Authorization: `Bearer ${authToken}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error al eliminar colaboración:", error);
        throw error;
    }
};



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

        console.log('proposal data axios inicio');
        const response = await axios.post(`api/collaboration-proposals`, proposalData, {headers});
        console.log('proposal data axios salida', response);

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