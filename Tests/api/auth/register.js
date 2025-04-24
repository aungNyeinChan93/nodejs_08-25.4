import axios from "axios";

axios.defaults.baseURL = 'http://127.0.0.1:3000/api'

const register = async () => {
    const { data } = await axios.post(`/user/register`, {
        name: 'fofo',
        email: 'fofo@123',
        password: '123123123'
    });
    return data;
}

const { message, result } = await register();
console.log(`Message: ${message}`);
console.log(result);

