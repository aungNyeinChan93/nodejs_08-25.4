// revision es6

var v = 'i am var';
let l = 'i am let';
var v = 'i am also var';

{
    var v = 'i am update var';
    let l = 'i am update let'
    console.log(l);
    var v2 = 'i am var in blcok-scope'
}

console.log(v);
console.log(l);
console.log(v2);


const callbackEg = (a, b, callback) => {
    let res;
    let err;
    if (typeof a == 'number' && typeof b == 'number') {
        res = a + b;
    } else {
        err = 'parameter must be number'
    }
    callback(err, res)
};

callbackEg(2, "3", (err, res) => {
    err ? console.log(err) : console.log(res);
})

const promiseEg = (payload, time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            payload
                ? resolve(payload)
                : reject('payload is not be null');
        }, time)
    })
}
promiseEg('hello world!', 4000).then(res => console.log(res)).catch(err => console.log(err));

const asyncEg = async () => {
    try {
        const result = await promiseEg('async/await example', 5000);
        return result
    } catch (error) {
        console.log(error);
    }
};

const result = await asyncEg();
console.log(result);

const result2 = await promiseEg('this is await outside from async ', 6000)
console.log(result2);

// obj
let skills = ['js', 'php', 'laravel', 'node']
const MyInfo = {
    skills,     //shorthand property
    callbackEg, //shorthand property
    name: "chan",
    master: "js",
    whatUp() {
        console.log(`${this.name} is master in ${this.master}`);
    },
    call(a, b, cb) {
        this.callbackEg(a, b, cb)
    },
    self() {
        return this;
    },
    otherSelf: () => this,


}

MyInfo.callbackEg(1, 1, (err, res) => console.log(res));
MyInfo.skills.map(s => console.log(s))
MyInfo.call(2, 2, (err, res) => console.log(res));
MyInfo.whatUp();

console.log(MyInfo.self().name);

// spread ...
const customers = [
    { name: 'mgmg', age: 21 },
    { name: 'susu', age: 20 },
];
const addCustomers = [...customers, { name: 'mumu', age: 33 }]
console.log(addCustomers);

let final = [];
addCustomers.forEach(c => {
    final.push({ ...c, gender: 'male' });
});
console.log(final);


// objectLiteral
const objectLiteral = (name) => {
    return { name }  // return  {name:name}
};
const as = objectLiteral('aung')
console.log(as); // { name: 'aung' }  key_name :variable_name of value is same  ,! when u want to use key name as like variable name 
const { name: myName } = objectLiteral('anc')
console.log(myName);

const useExample = () => {
    const one = {
        name: 'this is one'
    };
    const two = () => console.log('this is two');
    return { one, two, three: () => 'this is three', four() { return 'this is four' } }
}
const { one, two, three, four } = useExample();
console.log(`this is one: ${one.name}`);
two();
console.log(three());
console.log(four());

const five = () => 'this is five'
const useExample2 = {
    one: 'one',
    two: () => 'this is two',
    three() {
        return 'this is three'
    },
    five,
    [one + 'prefix']: 'prefix'
}
const { one: One, two: Two, three: Three, five: Five } = useExample2;
console.log(One, Two(), Three(), Five());
console.log(useExample2);

// 
const useExample3 = () => {
    let err = 'this is err';
    let res = () => 'this is res';
    return [err, res]
};
const [err, res] = useExample3();
console.log(err, res());

