import { user1, user2 } from "./data.js";
import { createAccount } from "./utils.js";

const accounts = [];



const result = createAccount(user2, accounts);
console.log(result.message);

const result2 = createAccount(user2, accounts);
console.log(result2.message);

const result3 = createAccount(user1, accounts);
console.log(result3.message);

const result4 = createAccount(user1, accounts);
console.log(result4.message);

console.log('Database: ', accounts);
