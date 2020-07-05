import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://order-burger-81344.firebaseio.com/'
});

export default instance;