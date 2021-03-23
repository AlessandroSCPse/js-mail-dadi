// Mail
// Chiedi all’utente la sua email, controlla che sia nella lista di 
// chi può accedere, stampa un messaggio appropriato 
// sull’esito del controllo.

// Una lista di email
var listaEmail = [
    "alessandro61@gmail.com",
    "mario@gmail.com",
    "claudia@gmail.com",
    "gloria@gmail.com",
    "ernesto@gmail.com"
];

// L'email dell'utente
var mailUtente = prompt("Dimmi la tua email");
// console.log(listaEmail);
// console.log(mailUtente);

// Controllare che nella lista ci sia l'email utente
var mailTrovata = false;

for( var i = 0; i < listaEmail.length; i++ ) {
    var thisEmail = listaEmail[i];
    
    // Se trovo l'email nella lista (array), mailTrovata diventa vera
    if( thisEmail === mailUtente ) {
        mailTrovata = true;
    }

    console.log( thisEmail + ' - ' + mailUtente );
    console.log( mailTrovata );
}

console.log(mailTrovata);
// se la trovo scrivo puoi entrare, altrimenti scrivo che non puoi entrare
if( mailTrovata === true ) {
    alert("Puoi entrare");
} else {
    alert("Non puoi entrare");
}




// // Gioco dei dadi
// // Generare un numero random da 1 a 6, sia per il giocatore sia 
// // per il computer. Stabilire il vincitore, in base a chi fa il 
// // punteggio più alto.

// // Numero random giocatore
// var numeroGiocatore = Math.floor(Math.random() * 6) + 1;
// console.log(numeroGiocatore);

// // Numero random computer
// var numeroComputer = Math.floor(Math.random() * 6) + 1;
// console.log(numeroComputer);

// // Valuto il punteggio più alto
// var messaggio;

// if( numeroGiocatore > numeroComputer ) {
//     messaggio = 'Fortunatissimo hai vinto';
// } else if ( numeroComputer > numeroGiocatore ) {
//     messaggio = 'Sfortunatissimo hai perso';
// } else {
//     messaggio = "Pari e patta";
// }

// // Stampo il risultato
// alert(messaggio);