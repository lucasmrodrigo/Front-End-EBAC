function calcularMedia(notas){

    let soma = 0;
    let media = 0;

    for(i = 0; i < notas.length; i++){
        soma = soma + notas[i];
    }

    media = soma/notas.length;

    return media;
}

function aprovacao(notas){

    let media = calcularMedia(notas);
    let condicao = media >= 6 ? 'Aprovado': 'Reprovado';

    return 'Média: ' + media + ' - Aluno ' + condicao;
}

document.addEventListener('submit', function(evento){
    evento.preventDefault();

    let formulario = document.getElementById('formulario-01');
    let dados = new FormData(formulario);
    let objeto = {};
    let notas = [];

    for (let key of dados.keys()){
        objeto[key] = dados.get(key);

        notas.push(Number(dados.get(key)));
    }

    console.log(notas);

    console.log(objeto);

    texto = aprovacao(notas);

    document.getElementById('resultado').innerHTML = texto;

}); 