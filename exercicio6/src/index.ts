//function operations(num1:  number, num2: number): void {
//   let sum: number = num1 + num2
//   let menos: number = num1 - num2
//   let multiplication: number = num1 * num2
//   let division: number = num1 / num2
//
//   console.log(`numeros recebidos ${num1} e ${num2}\nsoma: ${sum} \nsubtração ${menos} \nmultiplicação ${multiplication} \ndivisão ${division}`)
// }
// operations(600, 45)

function operations(num1:  number, num2: number): string {
    let sum: number = num1 + num2
    let menos: number = num1 - num2
    let multiplication: number = num1 * num2
    let division: number = num1 / num2

    return(`numeros recebidos ${num1} e ${num2}
    \nsoma: ${sum} \nsubtração ${menos} 
    \nmultiplicação ${multiplication} 
    \ndivisão ${division}`)
}

let result = operations(600, 45)
console.log(result)
