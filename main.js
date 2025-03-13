import {find, search, save, edit, remove} from "./api.js";

const obj = {
    email: "dariencarvajal27@gmail.com",

    id: 1
}

const message = await edit(obj);
console.log(message);