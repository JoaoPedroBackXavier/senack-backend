"use strict";
function retorna(nome, ddn) {
    const Nome = nome;
    let datae = ddn.split('/');
    const dia = datae[0];
    const mes = datae[1];
    const ano = datae[2];
    console.log(`ola me chamo ${Nome} nasci no dia ${dia} do mes ${mes} no ano ${ano}`);
}
retorna('soarez', '12/3/2022');
//# sourceMappingURL=index.js.map