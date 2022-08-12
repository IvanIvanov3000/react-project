import * as request from './requester';

const baseUrl = 'http://localhost:3030/blog/';

export const getAll = () => request.get(`${baseUrl}comments`);
export const getTopComments = () => request.get(`${baseUrl}comments/top`);

export const createComment= (commentData) => request.post(`${baseUrl}comments`, commentData);
