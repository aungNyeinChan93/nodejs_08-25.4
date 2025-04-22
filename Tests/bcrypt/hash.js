import bcrypt from 'bcryptjs'

const hash = async (payload, salt) => {
    return await bcrypt.hash(payload, await bcrypt.genSalt(salt));
}
const hash_value = await hash('123123123', 10);
console.log(hash_value);

const compare = async (plain, hash) => {
    return await bcrypt.compare(plain, hash);
}
if (await compare('123123123', hash_value)) {
    console.log('correct!');
} else {
    console.log('not correct!');
}

