function Chutar() {
    // sortear um número aleatório
    let numeroSecreto = parseInt(Math.random()*11)
    console.log(numeroSecreto)

    // pegar o número digitado e converter p/ inteiro
    let chute = parseInt(document.querySelector('#valor').value)
    console.log(numeroSecreto, chute)

    //comparar o número digitado com o número aletório secreto
    /*OPERADORES RELACIONAIS
    < --> MENOR
    > --> MAIOR
    <= --> MENOR OU IGUAL
    >= --> MAIOR OU IGUAL
    == --> IGUAL
    != --> DIFERENTE
    */
   // Se (numeroSecreto for igual ao chute) então
   if(numeroSecreto == chute){

   // se tiver correto e os números forem iguais, mostrar a mensagem que a pessoa acertou
   document.querySelector(".resultado").innerHTML = "Você acertou"
   }
   else{
   //se tiver errado e os números forem diferentes, mostrar a mensagem que a pessoa errou
   document.querySelector(".resultado").innerHTML = "Você errou"
}
}