const baseUrl = 'http://localhost:3030/';

export const login = async (email, password) => {
    console.log(email, password);
    let res = await fetch(`${baseUrl}login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    let jsonResult = await res.json();

    if (res.ok) {
        return jsonResult;
    } else {
        throw jsonResult.message;
    }
};

export const register = (email, username, password, repeatPassword) => {
    return fetch(`${baseUrl}register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, username, password, repeatPassword })
    })
        .then(res => res.json());
};

export const logout = (token) => {
    return fetch(`${baseUrl}logout`, {
        headers: {
            'X-Authorization': token,
        }
    })
};

export const getUser = () => {
    let username = localStorage.getItem('username');

    return username;
};

export const isAuthenticated = () => {
    return Boolean(getUser())
};