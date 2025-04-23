import { ErrorLog } from '../../utils/core.js'


// ErrorLog.write('this is testing Error 2');

const err2 = await ErrorLog.read('1,745,375,188,616_anc_.txt')
console.log(JSON.parse(err2));
console.log(typeof JSON.parse(err2));
