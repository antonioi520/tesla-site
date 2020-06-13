import axios from 'axios';
export const register = newUser => {
    return axios
        .post('users/register', {
            firstname: newUser.firstname,
            lastname: newUser.lastname,
            email: newUser.email,
            username: newUser.username,
            password: newUser.password
        })
        .then(res => {
            console.log("registered")
        }).catch( err => {
            console.log(err)
        })
}
export const login = user => {
    return axios
        .post('users/login', {
            username: user.username,
            password: user.password
        })
        .then(res => {
            localStorage.setItem('userToken', res.data)
            return res.data
        })
        .catch( err => {
            console.log(err)
        })
}