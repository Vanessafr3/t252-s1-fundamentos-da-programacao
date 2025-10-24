var aluno1 = {
    nome: "Felipe",
    cursoId: 2,
    notas: [10, 8, 7],
    mensagens: "Você está indo muito bem!"
};
var aluno2 = {
    nome: "Natalia",
    cursoId: 3,
    notas: [5, 7, 6],
    mensagens: "Não desista,estamos aqui para te ajudar!"
};
var aluno3 = {
    nome: "Vitória",
    cursoId: 1,
    notas: [9, 10, 10],
    mensagens: "Parabéns,você é uma ótima aluna!"
};
var curso = [
    { id: 2, nome: "Suporte de TI" },
    { id: 3, nome: "Excel Avançaado" },
    { id: 1, nome: "Inglês" }
];
function mediaAluno(aluno) {
    var media = (aluno.notas[0] + aluno.notas[1] + aluno.notas[2]) / 3;
    return media;
}
var estiloAprendizado = function (aluno) {
    var media = mediaAluno(aluno);
    if (media >= 7) {
        return "Exploradora confiante";
    }
    else if (media >= 5 && media < 7) {
        return "Brilha como Aprendiz";
    }
    else {
        return "Desbravando a programação";
    }
};
function infoAluno(aluno) {
    var media = mediaAluno(aluno);
    var nomeCurso;
    switch (aluno.cursoId) {
        case 1:
            nomeCurso = "Suporte de TI";
            break;
        case 2:
            nomeCurso = "Excel Avançado";
            break;
        case 3:
            nomeCurso = "Inglês";
            break;
        default:
            nomeCurso = "Curso não encontrado";
    }
    console.log("Aluno:", aluno.nome);
    console.log("Curso:", nomeCurso);
    console.log("Média:", media);
    console.log("Estilo de Aprendizado:", estiloAprendizado(aluno));
    console.log("Mensagem:", aluno.mensagens);
    console.log("---------------------------");
}
infoAluno(aluno1);
infoAluno(aluno2);
infoAluno(aluno3);
