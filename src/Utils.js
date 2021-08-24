const URL = 'https://desolate-springs-52990.herokuapp.com/'

export async function getToken(login, type) {
    const authURL = `${URL}/auth/${type}`;
    const resp = await fetch(authURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(login),
    });
    const data = await resp.json();
    localStorage.setitem('Token', data.token);
    return data.token;
}