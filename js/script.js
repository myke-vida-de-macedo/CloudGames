const vitrine = document.getElementById("vitrine")

const botoesProdutos = document.querySelector(".navListaProdutos")

let sessaoProdutos = []

function organizarSessoes ( arr ) {

    dividirProdutos( arr )
    criarBotoes( arr )
    
}

organizarSessoes( data_base )

function colocarItensVitrine ( arr ) {

    zerarVitrine()
    renderizarItensArr( arr )
}

colocarItensVitrine( sessaoProdutos[0] )


function zerarVitrine () {

    vitrine.innerHTML = ""

}
function dividirProdutos ( arr ) {

    sessaoProdutos = []

    let arr2 = []

    for( let i = 0; i < arr.length ; i++ ){
       
        arr2.push( arr[i] )

        if(arr2.length == 6){
            sessaoProdutos.push( arr2 )
            arr2 = []
        }
        if( i == arr.length -1 ){
            sessaoProdutos.push( arr2 )
            arr2 = []
        }

    } 
}

function criarBotoes ( arr ) {

    botoesProdutos.innerHTML = ""

    let quantosBotoes = Math.round( arr.length / 6 + 0.5 )

    for( let i = 0; i < quantosBotoes; i++ ){

        botoesProdutos.insertAdjacentHTML(
            "beforeend", `
                <button>${ i + 1 }</button>             
        `
        )
    }
}

function renderizarItensArr ( arr ) {

    vitrine.innerHTML = ""

    for( let i = 0; i < arr.length ; i++ ){

        vitrine.insertAdjacentHTML(
            "beforeend", `
                <div id = "${ arr[i].id }" class="fechado">
                    <figure>
                        <img src="${arr[i].img}" alt="${arr[i].nome}" >
                    </figure>
                    <button class = "botaoConteudo">${arr[i].button}</button>
                </div>`
        )
    }
}

    //abrir conteúdo dos card

vitrine.addEventListener("click", verificarQualProduto )

function verificarQualProduto ( e ) {

    if( e.target.innerHTML == "Visualizar" ){

        e.path[1].innerHTML = ""

        e.path[1].classList.remove("fechado")
        e.path[1].classList.add("abertos")

        let elemento = pegarElemento( data_base, e.path[1].id )

        criarEstrutura( e.path[1], elemento )
                
    }


}
function pegarElemento( data_base, id ) {

    for ( let i in data_base ){
        if(data_base[i].id == id){
            return data_base[i]
        }
    }

}

function criarEstrutura ( elemento, objetoData) {

    elemento.insertAdjacentHTML("beforeend", `
            <h1>${ objetoData.nome }</h1>
            <p class = "categoria">${ objetoData.categoria.join(", ") }</p>
            <p class = "descricao">${ objetoData.descricao }</p>
            <p class = "valor">R$ ${ objetoData.valor }</p>
            <div>
                <button class = "adicionar">Adicionar carrinho</button>
                <button class = "fechar">Fechar</button>
            </div>
    `
    )


}

    //fechar conteúdo dos card

vitrine.addEventListener("click", fecharCard )

function fecharCard ( e ) {

    if( e.target.innerHTML == "Fechar" ){

        let data = pegarElemento( data_base, e.path[2].id )

        reconstruindoFechado( e.path[2], data )
    }
}

function reconstruindoFechado ( elemento, elementoNoData ) {

    elemento.innerHTML = ""
    elemento.classList.remove("abertos")
    elemento.classList.add("fechado")

    elemento.insertAdjacentHTML("beforeend", `
        <figure>
            <img src="${elementoNoData.img}" alt="${elementoNoData.nome}" >
        </figure>
        <button class = "botaoConteudo">${elementoNoData.button}</button>
    `
    )
}

    //Add itens carrinho

const sessaoCarrinho = document.getElementById("sessaoCarrinho")

let arrCarrinho = []

vitrine.addEventListener("click", mostrarQuantidadeSomaProdutos )

function mostrarQuantidadeSomaProdutos ( e ) {

    if( e.target.innerHTML == "Adicionar carrinho"){

        console.log( e.path[2].id )

        let element = pegarElemento( data_base, e.path[2].id )

        colocarArrCarrinho( element )

        mudarQuantidadeSoma( arrCarrinho )

        if(sessaoCarrinho.classList.contains("ocultar_mostrar")){

            
            renderizarItensCarrinho( arrCarrinho, sessaoCarrinho )
            console.log("t")
    
        }
    }
}

function colocarArrCarrinho ( element ) {

    arrCarrinho.push( element )

}

const quantidade = document.getElementById("quantidade")

const somaValores = document.getElementById("valor")

let quantidadeProdutos = 0

let somaProdutos = 0

function mudarQuantidadeSoma ( arrCarrinho ) {

    quantidade.innerHTML = ""

    somaValores.innerHTML = ""

    somaProdutos = 0

    quantidadeProdutos = 0

    quantidadeProdutos = arrCarrinho.length

    for(let i = 0; i < arrCarrinho.length ; i++){
        somaProdutos += arrCarrinho[i].valor
    }

    quantidade.innerHTML = `produtos: ${quantidadeProdutos}`

    somaValores.innerHTML = `R$ ${somaProdutos}`
}

    //botao que aciona a renderização e aparecer o carrinho ou retirar o carrinho

const botaoCarrinho = document.getElementById("botaoCarrinho")

botaoCarrinho.addEventListener("click", acionarCarrinho )

function acionarCarrinho ( e ) {

    sessaoCarrinho.classList.toggle("ocultar_mostrar")

    if(sessaoCarrinho.classList.contains("ocultar_mostrar")){

        renderizarItensCarrinho( arrCarrinho, sessaoCarrinho )
        console.log("t")

    }
    if(!sessaoCarrinho.classList.contains("ocultar_mostrar")){

        sessaoCarrinho.innerHTML = ""

    }


}

function renderizarItensCarrinho ( arrCarrinho, sessao ) {
        
    sessaoCarrinho.innerHTML = ""

    for( let i in arrCarrinho ){

        sessao.insertAdjacentHTML("beforeend", `
            <div id = ${arrCarrinho[i].id}>
                <div class="divIMG">
                    <img src="${arrCarrinho[i].img}" alt="${arrCarrinho[i].nome}" >
                </div>
                <div class = "descricaoProduto">
                    <h2>${arrCarrinho[i].nome}</h2>
                    <p>Valor: ${arrCarrinho[i].valor}</p>
                </div>
                <button>⨯</button>
            </div>    
        `
        )
    }

}

    //remover produtos do carrinho

sessaoCarrinho.addEventListener("click", verificarBotao )

function verificarBotao ( e ) {

    if( e.target.innerHTML == "⨯"){

        removerDoArrCarrinho( e )
     
        renderizarItensCarrinho( arrCarrinho, sessaoCarrinho )

        mudarQuantidadeSoma( arrCarrinho )
    }
}

function removerDoArrCarrinho ( e ) {

    for(let i = 0; i < arrCarrinho.length ; i++){

        if (arrCarrinho[i].id == e.path[1].id ){

            arrCarrinho.splice(i,1) 
             break
        }
    }
}

    //barra pesquisa

const botaoPesquisa = document.getElementById("botaoPesquisa")

const inputPesquisa = document.getElementById("inputPesquisa")

botaoPesquisa.addEventListener("click", clickBotao )

function clickBotao () {

    let nomeTratado = tratamentoPalavra( inputPesquisa.value )

}

function tratamentoPalavra ( nome ) {

    let removendoEspaco = tratamentoEspaco( nome )

    let deixarTudoMinusculo = nomeMinusculo( removendoEspaco )

        let verificarComecoNomes = verificarInicioDeNome ( deixarTudoMinusculo, data_base )

        let nomeCompletoProduto = verificarNomeProduto ( deixarTudoMinusculo, data_base )

        let vefificarCategoria = verificarCategorias( deixarTudoMinusculo, data_base)

            let juntarArrs = concatenarArrarys( verificarComecoNomes, nomeCompletoProduto, vefificarCategoria )

            let verificarDuplicados = retirarDuplicados( juntarArrs )

            let pegarProdutos = pegarNoData( verificarDuplicados, data_base )

            organizarSessoes ( pegarProdutos )

            colocarItensVitrine( sessaoProdutos[0] )
}

function tramentoRetirarNumbers ( nome ) {

    let tranformar = nome.split("")

    for( let i = 0; i < tranformar.length ; i++){

        if(tranformar[i] == Number(tranformar[i]) && tranformar[i] !== " "){
           tranformar.splice(i,1)
           i -= 1
        }
    }

    return tranformar.join("")
}

function tratamentoEspaco ( nome ) {

    return nome.trim()

}

function nomeMinusculo ( nome ) {

    return nome.toLowerCase()

}

let arrProdutosPassaramTeste = []

function verificarInicioDeNome ( nome, data ) {

    let nomeTamnho = nome.split("")
    let soma = ""
    let arr = []
    let arrID = []

    for( let i in data ){
        
        for( let x in nomeTamnho ){
        
            soma += data[i].nome.split("")[x]
        }

        arr.push( soma.toLowerCase() )
        soma = ""
    }

    for( let i = 0; i < arr.length ; i++){
        
        if( arr[i] == nome ){
            arrID.push( i + 1 )
        }
    }

    return arrID
}

function verificarCategorias( nome, data ) {
    
    let arr = []

    for( let i in data ){

        for(let x = 0; x < data[i].categoria.length ; x++){

            if( data[i].categoria[x].toLowerCase() == nome ){

                arr.push( data[i].id )
            }
        }
    }

    return arr
}

function verificarNomeProduto ( nome, data ) {

    let arr = []

    for( let i in data ){

            console.log( data[i].nome.toLowerCase(), nome )
        if( data[i].nome.toLowerCase() == nome ){

            arr.push( data[i].id )
        }
    }
    return arr
}

function concatenarArrarys( arr1, arr2, arr3 ) {

    return arr1.concat( arr2, arr3 ) 
}

function retirarDuplicados ( arr ) {

    return arr.filter( ( element, i, arrC ) => arrC.indexOf( element ) == i )
}

function pegarNoData ( arr, data ) {

    let produtos = []

    for(let i = 0; i < arr.length ; i++){

        for( let d in data ){

            if( arr[i] == data[d].id ){

                produtos.push( data[d] )
            }
        }
    }

    return produtos
}

    //rederiar 9 produtos por vez

botoesProdutos.addEventListener("click", teste )

function teste ( e ) {

    if( e.target.nodeName == "BUTTON"){
        let v = Number( e.target.innerHTML ) -1
        
        colocarItensVitrine( sessaoProdutos[v] )
    }
}

    //menu categorias suspenso

const suspenso1 = document.getElementById("suspenso1")

const categorias = document.getElementById("primeiraSeesao")

suspenso1.addEventListener("click", verificar )

    //

let todasCategorias = []
    
function listaCategorias ( data ) {

    let arrays = fazerArrayArrays( data )
    
    let arrTudoJunto = concatenarTodos( arrays )

    todasCategorias = removerDuplicados( arrTudoJunto ) 
}

function fazerArrayArrays ( data ) {

    let arr = []

    for( let i in data ){
        arr.push( data[i].categoria )
    }

    return arr
}

function concatenarTodos ( arr ) {

    let testo = ""

    for(let i = 0; i < arr.length ; i++){

        testo += "," + arr[i].join(",")
    }

    return testo.split(",")
    
}

function removerDuplicados ( arr ) {

    let arr2 = arr.filter( ( e, i, arr) => arr.indexOf( e ) == i )

    arr2.splice(0,1,"Todos")

    return arr2
}

    //

listaCategorias ( data_base )

function verificar ( e ) {

    console.log( e.target.innerHTML)

    if( e.target.innerHTML == "Categorias" ){

        categorias.classList.toggle("ocultarSuspenso")

    }
    if( e.target.innerHTML == "Categorias" && categorias.classList.contains("ocultarSuspenso") ){

        construirBotoes( todasCategorias )
    }
    if( e.target.innerHTML == "Categorias" && !categorias.classList.contains("ocultarSuspenso") ){

        categorias.innerHTML = ""
    }

}

function construirBotoes ( nomes ) {

    categorias.innerHTML = ""

    for(let i = 0; i < nomes.length ; i++) {

        categorias.insertAdjacentHTML(
            "beforeend", `
                <button class = "botaoSuspenso" >${nomes[i]}</button>
        `
        )

    }

}

    //filtro no lista suspença

categorias.addEventListener("click", mostrarPordutos )

function mostrarPordutos ( e ) {

    if( e.target.innerHTML == "Todos" ){

        organizarSessoes (data_base )

        colocarItensVitrine( sessaoProdutos[0] )

    }
    if( e.target.innerHTML !== "Todos" ){

        tratamentoPalavra ( e.target.innerHTML )

    }

}

    //colocar imagem nome e valor card propaganda

const imagemPrincipal = document.getElementById("imagemPrincipal")

const blocoImagens = document.querySelector(".blocoImagens")

const nomePropaganda = document.getElementById("nomePropaganda")

const valorPropaganda = document.getElementById("valorPropaganda")

    //card aleatorios

let cardsAleatorios = []

function gerarCardsAleatoriois ( data ) {

    let arr = []

    let valor = gerarNumAleatorio()

    for(let i = valor; i < valor + 5 ; i++){

            arr.push( i )
        

    }

    pegarCard( data, arr)
}

gerarCardsAleatoriois ( data_base )

function pegarCard ( data, arr ) {

    for( let i in data ){

        for(let x = 0; x < arr.length; x++){

            if( data[i].id == arr[x]){

                cardsAleatorios.push( data[i] )
            }
        }
    }

}   

function gerarNumAleatorio () {

    return Math.round(Math.random() * (17 - 0) + 0)
}

    //colocar card rederizar

let indice = 0

function colocarCard ( cards ) {
    
    verificarParaFrente ()

    colocarImagemPrincipal( cards )
    colocarImagensSecundarias( cards )
    colcoarNomeEValor( cards )

}

function verificarParaFrente () {

    if(indice == 5){
        indice = 0
    }
    if(indice == -1){
        indice = 4
    }
}


function colocarImagemPrincipal ( cards ) {

    imagemPrincipal.innerHTML = ""

    imagemPrincipal.insertAdjacentHTML(
        "beforeend", `
            <img src="${cards[indice].img}" alt="${cards[indice].nome}" id="imagemAserMudada">
        `
        )

}

function colocarImagensSecundarias ( cards ) {
    
    blocoImagens.innerHTML = ""

    blocoImagens.insertAdjacentHTML(
        "beforeend", `
            <img src="${cards[indice].imgs[0]}" alt="${cards[indice].nome}">
            <img src="${cards[indice].imgs[1]}" alt="${cards[indice].nome}">
            <img src="${cards[indice].imgs[2]}" alt="${cards[indice].nome}">
            <img src="${cards[indice].imgs[3]}" alt="${cards[indice].nome}">
        `
        )

}

function colcoarNomeEValor ( cards ) {

    nomePropaganda.innerHTML = cards[indice].nome

    valorPropaganda.innerHTML = `R$ ${cards[indice].valor}`
    
}

colocarCard ( cardsAleatorios, verificarParaFrente () )


    //botoes para mudar card propaganda

const propaganda = document.querySelector(".propaganda")

propaganda.addEventListener("click", pegarBotaoPropaganda )

function pegarBotaoPropaganda ( e ) {

    if( e.target.innerHTML == "◁" ){

        indice--
        colocarCard ( cardsAleatorios)
    }
    if( e.target.innerHTML == "▷" ){

        indice++
        colocarCard ( cardsAleatorios)
    }
}

