function vogaisConsoantes(){
    let letra = prompt("Digite uma letra: ").toLowerCase();
    if (letra=='a' || letra=='e' || letra=='i' || letra=='o' || letra=='u'){
    alert("Vogal")
    } else {   
    alert("Consoante")
    }
}
vogaisConsoantes();