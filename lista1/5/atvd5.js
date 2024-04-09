function transformaNumero(){
    let numero = parseInt(prompt("Digite um número inteiro:"))
    if (numero %2 ==0){
       numero++;
       alert ("Agora seu número é ímpar: " + numero)
    } else {
        numero--;
       alert ("Agora seu número é par: " + numero)
    }
}
transformaNumero();