enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}
function returnInfos(nome: string, ano: Number, genero: string, nota: null | number): any{
    type infos ={
        Nome: string,
        Ano: Number,
        Genero: string,
        Nota: null | number
    } 
    let Infos: infos = {
        Nome: nome,
        Ano: ano,
        Genero: genero,
        Nota: nota
    }
    return Infos
}

let generoDoFilm = GENERO.ACAO

console.log(returnInfos("de volta para o futuro", 1999, generoDoFilm, 100))