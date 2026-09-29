
// const elementos = document.querySelectorAll(".texto");

// //Percorrendo  lista e imprimindo cada um dos elementos
// elementos.forEach(elemento =>console.log(elemento));

// //Percorrendo  lista e imprimindo o texto do elemento (innertext)
// elementos.forEach(elemento =>console.log(elemento.innerText));

// //Alterando texto
// elementos.forEach(elemento => {
//     elemento.innerText = "Alterado"
// })

// // trocando as tags - innerHTML
// elementos.forEach(elemento =>{
//     elemento.innerHTML = "<h2>item</h2>"
// })


// //Trocando a cor dos elementos
// elementos.forEach(elemento => {
//     elemento.style.color = "#0000FF"
// })

// // EVENTOS COM JS
// // O QUE SÃO EVENTOS? Ações do usúario 

// //EVENT CLICK
// // const botao =document.getElementById("btn")

// // botao.addEventListener("click", () =>{
// //     alert("Você clicou!")
// // })

// // EVENTO DE DIGITAÇÃO (Input/ keyup)

// // const campo = document.getElementById("campo");
// // const resultado = document.getElementById("resultado");

// // // INPUT 
// // // evento input -> Dispara sempre que digita , em tempo real 
// // campo.addEventListener("input", () => {

// //     // value -> o que está sendo digitado dentro do campo 
// //     resultado.innerText = campo.value
// // })


// //KEYUP
// // //so dispara quando solta a tecla

// // campo.addEventListener("keyup", () => {

// //     // value -> o que está sendo digitado dentro do campo 
// //     resultado.innerText = campo.value})

//     // Evento de mouse 
// const elemento = document.getElementById("troca-cor")
// const botao = document.getElementById("btn")

// //mouseover -> quando passar o mouse pelo elemento 
// elemento.addEventListener("mouseover", () => {
//     elemento.style.backgroundColor = "#FF0000"
// })

// // mouseout -> quando o mouse sai do elemento 
// elemento.addEventListener("mouseout", () => {
//     elemento.style.backgroundColor = "#0000FF"
// })

    //mousemove
    //pega a posição do mouse 

    // document.addEventListener("mousemove" , (evento) => {
    //     console.log(`Posição X: ${evento.clientX} , Posição Y: ${evento.clientY}`)
        
    // })

    //EVENTO DE FORMULÁRIO (submit)

    // const form  = document.querySelector("form");// pegando direto pela tag form

    // //O COMPORTAMENTO PADRÃO DO FORMULÁRIO É RECARREGUAR A PÁGINA AO ENVIAR O SUBMIT
    // form.addEventListener("submit" , (e) =>{

    //     // impede o comportamento padrão do formulário 
    //     e.preventDefault()

    //     const nome = document.getElementById("nome").value

    //     console.log(`Nome: ${nome}`);                                            
        

    // })


    // //Criando elementos nas páginas 
    // const novoElemento = document.createElement("p");  //Cria o elemento <p>
    // novoElemento.innerText = "Elemento novo criado.";  //Cria um texto no elemento

    // const form = document.getElementById("form");

    // // Estamos adicionando um elemento filho (p) dentro do pai (form)
    // form.appendChild(novoElemento); 

    // //Criar um botão 
    // const botao = document.createElement("button");
    // botao.innerText("Excluir elemento");

    // form.appendChild(botao);

    // botao.addEventListener("click", (e) => {
    //     e.preventDefault();

    //     novoElemento.remove();

    //     // apagando direto do pai 
    //     // form.removeChild(novoElemento)
    // })


    //Adicionando elementos de uma lista , a partir de um input 
    const input = document.getElementById("input");  // input 
    const botao = document.getElementById("add");    // botao
    const lista = document.getElementById("lista")   // ul

    botao.addEventListener("click", (e) => {

        const valorDigitado = input.value; // Pega o valor que foi digitado na caixinha/input 

        const li = document.createElement("li"); // criando <i>
        li.innerText = valorDigitado;

        //Colocando o filho (li) dentro do pai (ul)
        lista.appendChild(li)

        input.value = "";
    })