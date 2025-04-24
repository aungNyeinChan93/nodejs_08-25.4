import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:3000/api";

const all = async () => {
    const { data } = await axios.get('/users', {
        params: {
            page: 1,
            perPage: 3,
            // search: 'susu'
        }
    });
    return data;
}

const { message, result } = await all();
console.log(`All users api message is ${message}`);
console.log(result);

// throw new Error('test')


