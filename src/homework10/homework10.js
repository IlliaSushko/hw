import "./homework10.scss";
import { type } from "os";

const salaries = {
    john: 200,
    jack: 300,
    title: "My menu",
    illia: 600,
    olia: 800,
}

function findMax(obj) {
    let maxValue = 0;
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            maxValue += obj[key];
        }
    }
    return maxValue; 
}

let total = findMax(salaries);

console.log(total);

