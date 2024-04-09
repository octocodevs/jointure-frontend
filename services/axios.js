import axios from "axios";
import Cookies from "js-cookie";
// import { useAuthContext } from "@/contexts/authContext";

const urlAPI = "http://localhost:8000/";

// const { logout, getAuthToken } = useAuthContext();

axios.defaults.withCredentials = true;

axios.defaults.baseURL = urlAPI;

// const axiosInstance = axios.create({
//     baseURL: 'http://localhost:8000/', // Reemplaza con la URL base de tu API
//     withCredentials: true, // Incluir cookies en las solicitudes
//   });
  
//   // Agregar un interceptor de solicitud para incluir el token CSRF en los encabezados
//   axiosInstance.interceptors.request.use((config) => {
//     const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
//     config.headers['X-CSRF-TOKEN'] = csrfToken;
//     return config;
//   });

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




export const getprofiles = async () => {
    try {
        const response = await axios.get(`api/profile`)
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const createNewProfile = async (userData) => {
    try {
        const token = Cookies.get('laravel_session')
        const headers = { Authorization: `Bearer ${token}` }; // Configurar el encabezado de autorización

        console.log("entrando", userData);
        const response = await axios.post(`api/profile`, userData, { headers }); // Incluir los encabezados en la solicitud
        console.log(response, "saliendo");
        return response.data;
    } catch (error) {
        console.error('Error al crear el perfil', error);
        throw error.response;
    }
};