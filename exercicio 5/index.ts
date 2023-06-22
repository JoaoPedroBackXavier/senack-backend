function crrg(): boolean{
    const anoAtual = Number(prompt("ano atual"))
    const anoNascimento = Number(prompt("ano atual"))
    const anoEmissão = Number(prompt("ano atual"))

    const idade = anoAtual - anoNascimento
    const tempoCarteira = anoAtual - anoEmissão
    
    const cond1 = idade <= 20 && tempoCarteira >= 5
    const cond2 = idade > 20 && idade <= 50 && tempoCarteira >= 10
    const cond3 = idade > 50 && tempoCarteira >= 15 
    return cond1 || cond2 || cond3
}