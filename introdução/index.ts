// declaração de variaveis
const company : string = "senac";
let age: Number = 14;
let isCorrect : boolean = true;

// declaração de array
const arr: Array<number> = [1, 2, 3];
// ou
const array: number[] = [1, 2, 3];

//declaração de objetos
const person:{
    name: string,
    age: number
} = {
    name: "joão pedro",
    age: 14
}

//declaração tipo "any"
let result: any;
result = "result";
result = 1903;
result = true

//declaração de função tipada
function sum(n1: number, n2: number): number {
    return n1 + n2
}

function resultsum(n1: number, n2: number): string {
    return `resultado é ${n1 + n2}`
}

//declaração de função void
function sayHello(name?: string): void {
    console.log("hello, ", name || "world")
}


