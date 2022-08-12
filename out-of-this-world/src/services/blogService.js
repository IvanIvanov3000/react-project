import * as request from './requester';

const baseUrl = 'http://localhost:3030/blog/';

export const getAll = () => request.get(`${baseUrl}comments`);
export const getTopMovies = () => request.get(`${baseUrl}comments/top`);