type Filme = {
    titulo: string;
    nota: number;
  };
  
 const filmes: Filme[] = [
    { titulo: "Matrix", nota: 9 },
    { titulo: "Avatar", nota: 8 },
    { titulo: "Interestelar", nota: 9 },
    { titulo: "Vingadores", nota: 7 },
    { titulo: "O Senhor dos Anéis", nota: 9 },
    { titulo: "Harry Potter", nota: 8 },
    { titulo: "Pantera Negra", nota: 7 },
    { titulo: "Homem de Ferro", nota: 8 }
  ];
  
function compararFilmes(filmeA: Filme, filmeB: Filme): Filme {
    if (filmeA.nota > filmeB.nota) return filmeA;
    if (filmeB.nota > filmeA.nota) return filmeB;
  

    return filmeA.titulo.localeCompare(filmeB.titulo) < 0 ? filmeA : filmeB;
  }
  
  let primeiraFase: Filme[] = [];
  for (let i = 0; i < filmes.length / 2; i++) {
    const filme1 = filmes[i];
    const filme2 = filmes[filmes.length - 1 - i];
    if (!filme1 || !filme2) continue; 
    const vencedor = compararFilmes(filme1, filme2);
    primeiraFase.push(vencedor);
  }
  
  console.log("🎥 Vencedores da Primeira Fase:");
  console.log(primeiraFase);
  console.log("----------------------------");
  
  
  let segundaFase: Filme[] = [];
  for (let i = 0; i < primeiraFase.length; i += 2) {
    const a = primeiraFase[i];
    const b = primeiraFase[i + 1];
    if (!a || !b) continue; 
    const vencedor = compararFilmes(a, b);
    segundaFase.push(vencedor);
  }
  
  console.log("🎬 Vencedores da Semifinal:");
  console.log(segundaFase);
  console.log("----------------------------");
  
  
  if (segundaFase.length < 2) {
    throw new Error("Semifinal não produziu doi finalistas.");
  }
  const finalista1 = segundaFase[0]!;
  const finalista2 = segundaFase[1]!;
  const campeao = compararFilmes(finalista1, finalista2);
  const vice = campeao === finalista1 ? finalista2 : finalista1;
  
  
  console.log("🏆 Campeão:", campeao.titulo, "- Nota:", campeao.nota);
  console.log("🥈 Vice-campeão:", vice.titulo, "- Nota:", vice.nota);