/* 1 Creare un oggetto che descriva uno studente, con le seguenti proprietà:
nome,
cognome
età.
2 Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
3 Creare un array di oggetti di studenti.
4 Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
5 Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.*/

//1 Oggetto studente
var studente = {
    "nome": "Stefania",
    cognome: "Mastrella",
    età: 23
}
console.log(studente);
// 2 Stampare su pagina proprietà oggetto tramite for in
for(var key in studente){
    console.log(key);
    document.getElementById("studente").innerHTML+="<li>"+studente[key]+"</li>";
}
//3 Creare un array di oggetti di studenti.
var classe = [
    {"nome": "Roberto",
    cognome: "D'Angelo",
    età: 35 },
    {"nome": "Giovanna",
    cognome: "Bianchi",
    età: 25 },
    {"nome": "Ludovica",
    cognome: "Ferrari",
    età: 20 },
    {"nome": "Mario",
    cognome: "Rossi",
    età: 20 }
]
//5 Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
var nomeUtente= prompt("Inserisci il nome del nuovo studente");
var cognomeUtente= prompt("Inserisci il cognome del nuovo studente");
var etaUtente= Number(prompt("Inserisci l'età del nuovo studente"));

var nuovoStudente={
    "nome": nomeUtente,
    cognome: cognomeUtente,
    età: etaUtente 
}
classe.push(nuovoStudente)
console.log(classe);

//4 Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
//Ciclo spostato alla fine, dopo il punto 5, così anche il nuovo studente è visibile sulla pagina
for(var i=0;i<classe.length;i++){
    var classeElemento = classe[i]
    document.getElementById("lista").innerHTML+="<li>"+classeElemento["nome"]+"</li>";
    document.getElementById("lista").innerHTML+="<li>"+classeElemento["cognome"]+"</li>";
}



