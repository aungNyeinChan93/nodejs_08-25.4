import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:3000/api";

const show = async (id) => {
    const { data } = await axios.get(`/users/${id}`);
    return data;
}

const { message, result } = await show('68076a95c160091b2f4d25de');
console.log(`Show : ${message}`);
console.log(`user id : ${result._id}`);
console.log(result);


