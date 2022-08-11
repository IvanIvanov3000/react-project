export const request = async (method, url, data) => {
    let result = null;
    // console.log(data);
    if (method === 'GET') {
        result = fetch(url);
    } else {
        result = fetch(url, {
            method,
            headers: {
                'content-type': 'application/json',
                "credetials" : "true",
                'auth-token': getToken()
            },
            body: JSON.stringify({...data})
        });
    }
    
    return result.then(responseHandler);
};

async function responseHandler(res) {
    let jsonData = await res.json();

    if (res.ok) {
        return Object.values(jsonData);
    } else {
        throw jsonData;
    }
};

function getToken() {
    try {
        let userItem = localStorage.getItem('user');

        if (!userItem) {
            const error = new Error('You must be authenticated')
            throw error;
        }

        let user = JSON.parse(userItem);
        console.log(user, "token");
        return user.accessToken;
    } catch(err) {
        console.log(err);
    }
}

export const get = request.bind(null, 'GET');
export const put = request.bind(null, 'PUT');
export const post = request.bind(null, 'POST');