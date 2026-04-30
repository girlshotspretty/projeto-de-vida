const botoes =document.querySelectorA11(".botao");
const textos= documents.querySelectorA11(".aba.conteudo");
for(let i=0; <botoes.length;i++){
    botoes[i].onclick = function(){

for(let j=0;j<botoes.length;j++){
    botoes[j].classlist.remove("ativo");
     textos[j].classlist.remove("ativo");
}
}
        botoes[i].classlist.add("ativo");
        textos[i].classlist.add("ativo");
    }
    console.log();

}
const contadores=document.querySelectorA11(".contador");
const tempoObjetivo1 = new date("2024-10-05");
let tempoAtual = new date();

contadores[0].textoContent = tempoObgetivo - tempoAtual;

