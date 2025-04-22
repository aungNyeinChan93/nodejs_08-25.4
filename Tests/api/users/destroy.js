import axios from "axios";

axios.defaults.baseURL = 'http://127.0.0.1:3000/api';


let id = '6807c74d29c91ff51d0dc816'

axios.delete(`/users/${id}`)
    .then(res => console.log(res.data))
    .catch(err => console.log(err)); ``