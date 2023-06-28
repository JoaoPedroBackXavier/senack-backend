"use strict";
//nome e sobrenome retorna o nome completo  sobrenome nao pode ser nulo
function returnName(nome, sobrenome) {
    if (sobrenome == null) {
        return nome;
    }
    else {
        return nome + " " + sobrenome;
    }
}
console.log(returnName("joao", "pedro"));
//# sourceMappingURL=index.js.map