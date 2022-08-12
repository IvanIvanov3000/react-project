import * as request from './requester';
export const create = (movieData) => request.post(`${baseUrl}create`, movieData);


const baseUrl = 'http://localhost:3030/';

export const login = (userData) => request.post(`${baseUrl}login`, userData);

export const register = (userData) => request.post(`${baseUrl}register`, userData);

export const getProfile = () => request.get(`${baseUrl}users/profile`);
export const editProfile = (updatedUser) => request.post(`${baseUrl}users/profile`, updatedUser);


export const getUser = () => {
    let username = localStorage.getItem('username');

    return username;
};

export const isAuthenticated = () => {
    return Boolean(getUser())
};