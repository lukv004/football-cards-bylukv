/*
-objetivo 1: quando clicar no botão trocar de tema, adicionar a classe modo-claro no bofy para que os estilos do modo-claro sejam aplicados e mudar a imagem para a lua
    passo 1 - pegar no JS o elemento HTML correspondente ao botão troca de tema
    passo 2 - pegar o elemento HTML correspondente ao body
    passo 3 - identificar o clique no botão de troca de tema
    passo 4 - adicionar a classe modo-claro ao body
    passo 5 - trocar a img do botão para a lua

-objetivo 2: quando o site já tiver em modo claro, voltar para o modo escuro removendo a classe modo-claro e mudar a imagem para o sol
    passo 6 - verificar se a classe modo-claro já está presente
    passo 7 - remover a classe modo-claro do body
    passo 8 - trocar a img do botão para a sol

-objetivo 3: apenas mostrar o scroll quando clicar no card escolhido
    passo 1 - encontrar o html do scroll e passar para o js
    passo 2 - entender o clique do usuário
    passo 3 - adicionar o scroll ao usuário clicar no card
    passo 4 - quando o usuário clicar fora dos cards, apagar o scroll
*/

//objetivo 1
//passo 1
const botaoAlterarTema = document.getElementById("botao-alterar-tema")

//passo 2
const body = document.querySelector("body")

//passo 5
const imgBotaoTrocaTema = document.querySelector(".img-botao")

//passo 3
botaoAlterarTema.addEventListener("click", () => {

    //objetivo 2
    //passo 6
    const modoClaroAtivo = body.classList.contains("modo-claro") 

    body.classList.toggle("modo-claro")

    if (modoClaroAtivo){
       //passo 8
       imgBotaoTrocaTema.setAttribute("src", "./src/imagens/sun.png") 
    } else {
    //passo 5
    imgBotaoTrocaTema.setAttribute("src", "./src/imagens/moon.png")
    }
})

