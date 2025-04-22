import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:3000/api";

const create = async () => {
    const { data } = await axios.post('/users', {
        name: 'mumu',
        email: 'mumu@123',
        password: '123123123'
    })
    return data;
}

const { message, result } = await create();

console.log(`Create testing is message: ${message}`);
console.log(`Created user id is ${result._id}`);
console.log(result);

