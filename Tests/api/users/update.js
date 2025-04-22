import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:3000/api";

let id = '68072ebf66dbbd293c69b941';
axios.put(`/users/${id}`, {
    name: 'testing name',
    email: 'testing@123'
}).then(res => {
    console.log(res.data);
}).catch(err => {
    console.log(err);
})