import axios from "axios";

axios.defaults.baseURL = 'http://127.0.0.1:3000/api/tests';

axios.get('/error').then(res => console.log(res.data)).catch(err => console.log(err));