//função que recebe string com nome e outra string com data ("26/06/2023").
//retornar string no formato:
//`ola me chamo %{nome} nasci no dia ${dia} do mes %{mes} no ano ${ano}`
function retorna(nome: string, ddn: string): void{
    const Nome: string = nome
    let datae = ddn.split('/')
    const dia = datae[0]
    const mes = datae[1]
    const ano = datae[2]

    console.log (`ola me chamo ${Nome} nasci no dia ${dia} do mes ${mes} no ano ${ano}`)
}
retorna('soarez', '12/3/2022')
