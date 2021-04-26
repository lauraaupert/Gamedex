import axios from 'axios';

export default {
    signUp: (email, password, username) => {
        console.log(email, password, username)
        return axios.post('/api/signup', {
            email: email,
            password: password,
            username: username
        })
    },
    // onboarded: (id) => {
    //     return axios.put('/api/users/' + id)
    // },
    // onboardStatus: (id) => {
    //     return axios.get('/api/users/' + id)
    // },
    LogIn: (username, password) => {
        return axios.post('/api/login', {
            username: username,
            password: password
        })
    },
    isAuthenticated: () => {
        return axios.get('/api/user_data')
    },
    Logout: () => axios.get('/api/logout')
}