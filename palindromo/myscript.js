// minigioco palindromo?
let parolaUtente = prompt ("inserisci una parola per verificare se è palindroma");
let parolaSpelling = parolaUtente.split('');

let parolaContario = parolaSpelling.reverse();

let parolaInvertita = parolaSpelling.join('');
document.getElementById("palindromo").innerHTML = (parolaInvertita);

if(parolaUtente == parolaInvertita){
    document.getElementById("rispostaUtente").innerHTML = ('La parola è palindroma');
  } else {
    document.getElementById("rispostaUtente").innerHTML = ('La parola non è palindroma');
  }



