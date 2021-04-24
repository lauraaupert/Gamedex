import axios from 'axios';

export default {
    isLoggedIn: () => {
        return axios.get('/auth/success')
    },
    signUp: (email, password, name) => {
        console.log(email, password, name)
        return axios.post('/api/signup', {
            email: email,
            password: password,
            name: name
        })
    },
    // onboarded: (id) => {
    //     return axios.put('/api/users/' + id)
    // },
    // onboardStatus: (id) => {
    //     return axios.get('/api/users/' + id)
    // },
    LogIn: (email, password) => {
        return axios.post('/api/login', {
            email: email,
            password: password
        })
    },
    Logout: () => axios.get('/logout')
}