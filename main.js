import {find, search, save, edit, remove} from "./api.js";

const obj = {
    name: "Darien",
    lastname: "Carvajal",
    age: 17,
    email: "darienc@gmail.com",
    rol: ["user", "admin"]
}

const message = await save(obj);
console.log(message);