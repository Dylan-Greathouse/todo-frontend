const URL = 'https://desolate-springs-52990.herokuapp.com/'

export async function getToken(login, type) {
    const authURL = `${URL}auth/${type}`;
    const resp = await fetch(authURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(login),
    });
    const data = await resp.json();
    localStorage.setItem('Token', data.token);
    return data.token;
}

export const getTodos = async () => {
const resp = await fetch(`${URL}api/todos`);
const data = await resp.json();
return data;
};

export const updateTodos = async (obj) => {
    const resp = await fetch(`${URL}api/todos/${obj.id}`,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
    });
    const data = await resp.json();
    return data;
};

export const createTodos = async (obj) => {
    const resp = await fetch(`${URL}api/todos/`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
    });
    const data = await resp.json();
    return data;
};