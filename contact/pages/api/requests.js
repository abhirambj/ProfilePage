import {base} from './variables';

export const SubmitData = data => {
    return fetch(`${base}/user`,{
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type':'application/json'
        }
    }).then(res => res.json())
}

export const getUsers = () => {
    return fetch(`${base}/list`)
    .then(data => data.json());
}