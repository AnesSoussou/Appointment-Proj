import {
    REGISTER_SUCCESS,
    REGISTER_FAIL, LOGIN_SUCCESS,
    LOGIN_FAIL, LOAD_USER_SUCCESS,
    LOAD_USER_FAIL, LOGOUT,
    USER_ADDED, USER_DESACTIVATED,
    CLIENT_ADDED, CLIENT_DESACTIVATED,
    CLIENT_ADD_FAIL, USER_ADD_FAIL
} from './types';
import axios from 'axios';
import setToken from '../setToken';

export const registerUser = (info) => (dispatch) => {
    axios.post('/register', info)
        .then((res) => dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data,
        }))
        .catch((err) => dispatch({
            type: REGISTER_FAIL,
            payload: err.response.data.errors,
        }));

}


export const loadUser = () => dispatch => {
    setToken()
    axios.get('/login')
        .then((res) => dispatch({
            type: LOAD_USER_SUCCESS,
            payload: res.data,
        }))
        .catch((err) => dispatch({
            type: LOAD_USER_FAIL,
            payload: err.response.data.msg
        }));
};

export const loginUser = data => dispatch => {
    axios.post('/login', data)
        .then(res => dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
        }))
        .catch(err => dispatch({
            type: LOGIN_FAIL,
            payload: err.response.data.errors,
        }));
};

export const logoutUser = () => dispatch => {
    dispatch({
        type: LOGOUT,
    });
}

export const addClient = (info) => (dispatch) => {
    axios.post('/addClient', info)
        .then((res) => dispatch({
            type: CLIENT_ADDED,
            payload: res.data,
        }))
        .catch((err) => dispatch({
            type: CLIENT_ADD_FAIL,
            payload: err.response.data.errors,
        }));

}