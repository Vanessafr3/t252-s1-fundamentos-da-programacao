interface RespostaPesquisa {
    id: number;
    usuario: string;
    notaSatisfacao: number; // 1 a 5
    duplicado: boolean;
    comentario: string;
  }

  const respostas: RespostaPesquisa[] = [
    { id: 1, usuario: "Thais",    notaSatisfacao: 5, duplicado: false, comentario: "Amei o app!" },
    { id: 2, usuario: "Jessica",  notaSatisfacao: 2, duplicado: false, comentario: "Poderia ser mais rápido." },
    { id: 3, usuario: "Thais",    notaSatisfacao: 5, duplicado: true,  comentario: "Registro duplicado." },
    { id: 4, usuario: "Ana bia",  notaSatisfacao: 4, duplicado: false, comentario: "Curti a navegação." },
    { id: 5, usuario: "Carol",    notaSatisfacao: 1, duplicado: false, comentario: "Muitos bugs." },
  ];

  function buscarUsuario(respostas: RespostaPesquisa[], nome: string) => {
   for (let resposta of respostas) {
    if (resposta.usuario === nome) {
        return `nota ${resposta.notaSatisfacao}, comentário: ${resposta.comentario}`;
    } 
    return "Usuário não encontrado";
}
  }

  console.log(buscarUsuario(respostas, "Ana bia"));
  console.log(buscarUsuario(respostas, "Carlos"));

   npx ts node 