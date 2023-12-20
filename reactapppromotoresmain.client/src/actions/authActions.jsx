import axios from "axios";
import { LOGIN_ENDPOINT, REGISTER_ENDPOINT } from "../helpers/endpoints";
import { SET_CURRENT_USER } from "./types";
import jwt_decode from 'jwt-decode';
import setAuthToken from '../helpers/setAuthToken';


export const loginUser = (userData) => dispatch => {

    //const { tipoUsuarioId } = userData;
    
    return new Promise((resolve, reject) => {
        axios.post(LOGIN_ENDPOINT, userData, {
            headers: { 'Accept': 'application/json', 'Content-type': 'application/json' }
        }).then(response => {

            const { authorization } = response.headers;

            localStorage.setItem('jwtToken', authorization);

            setAuthToken(authorization);

            const decoded = jwt_decode(authorization);

            var tipoUsuarioIdVar = 0;

            dispatch(getUser({}))
                .then(response => {
                    const { tipoUsuarioId } = response.data;
                    tipoUsuarioIdVar = tipoUsuarioId;
                    
                    dispatch(setCurrentUser({ user: decoded, loggedIn: true, tipoUser: tipoUsuarioIdVar }));

                })
               

            resolve(response);
        }).catch(error => {
            reject(error);
        })
    });
}


export const registerUser = (userData) => dispatch => {
    return new Promise((resolve, reject) => {
        axios.post(REGISTER_ENDPOINT, userData, {
            headers: { 'Accept': 'application/json', 'Content-type': 'application/json' }            
        }).then(response => {            
            resolve(response);
        }).catch(error => {
            reject(error);
        });
    });
}

export const getUser = (userData) => dispatch => {
    return new Promise((resolve, reject) => {
        
        axios.get(REGISTER_ENDPOINT, userData, {
            headers: { 'Accept': 'application/json', 'Content-type': 'application/json' }
        }).then(response => {
            

            /*
            const keys = Object.keys(response);

            // Iterar sobre las claves
            for (let i = 0; i < keys.length; i++) {
                const key = keys[i];
                const value = response[key];
                alert(`Clave: ${key}, Valor: ${value}`);
            }

            const { tipoUsuarioId } = response.data;
            alert(tipoUsuarioId);

            //dispatch(setCurrentUser({ tipoUser: tipoUsuarioId }));
            */

            resolve(response);
        }).catch(error => {
            reject(error);
        });
    });
}


export const setCurrentUser = ({ user, loggedIn, tipoUser }) => {
    return {
        type: SET_CURRENT_USER,
        payload: { user, loggedIn, tipoUser }
    };
}

export const logoutUser = () => dispatch => {
    localStorage.removeItem('jwtToken');

    setAuthToken(false);

    dispatch(setCurrentUser({
        user: {},
        loggedIn: false,
        tipoUser: 0
    }));
}