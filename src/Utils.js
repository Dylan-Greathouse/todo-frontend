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

export async function getTodos(token) {
const todosURL = `${URL}api/todos`; 
const resp = await fetch(todosURL, {
    
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    Authorization: token,
    },
});

const data = await resp.json();
return data;
};

export async function updateTodos(token, obj) {
    const todosURL = `${URL}api/todos/${obj.id}`;
    const resp = await fetch(todosURL,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: token,
        },
        body: JSON.stringify(obj),
    });
    const data = await resp.json();
    return data;
};

export async function createTodos(token, obj) {
    const todosURL = `${URL}api/todos/`;
    const resp = await fetch(todosURL,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: token,
        },
        body: JSON.stringify(obj),
    });
    const data = await resp.json();
    return data;
};