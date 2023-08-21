import { hi } from "./m";

function sum(a: number, b: number): number {
    return a + b;
}
console.log(sum(123, 456));
console.log("Hello TS and webpack");
console.log(hi);

const pms = Promise.resolve(2);
