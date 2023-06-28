var GENERO;
(function (GENERO) {
    GENERO["ACAO"] = "a\u00E7\u00E3o";
    GENERO["DRAMA"] = "drama";
    GENERO["COMEDIA"] = "com\u00E9dia";
    GENERO["ROMANCE"] = "romance";
    GENERO["TERROR"] = "terror";
})(GENERO || (GENERO = {}));
function returnInfos(nome, ano, genero, nota) {
    let Infos = {
        Nome: nome,
        Ano: ano,
        Genero: genero,
        Nota: nota
    };
    return Infos;
}
let generoDoFilm = GENERO.ACAO;
console.log(returnInfos("de volta para o futuro", 1999, generoDoFilm, 100));
//# sourceMappingURL=index.js.map