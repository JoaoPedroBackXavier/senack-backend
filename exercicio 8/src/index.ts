//nome e sobrenome retorna o nome completo  sobrenome nao pode ser nulo
function returnName(nome: string, sobrenome: string | null): string{
    if (sobrenome == null){
    return nome
    }else{
        return nome + " " + sobrenome
    }
}
console.log(returnName)