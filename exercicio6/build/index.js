"use strict";
function operations(num1, num2) {
    let sum = num1 + num2;
    let menos = num1 - num2;
    let multiplication = num1 * num2;
    let division = num1 / num2;
    return (`numeros recebidos ${num1} e ${num2}
    \nsoma: ${sum} \nsubtração ${menos} 
    \nmultiplicação ${multiplication} 
    \ndivisão ${division}`);
}
let result = operations(600, 45);
console.log(result);
//# sourceMappingURL=index.js.map