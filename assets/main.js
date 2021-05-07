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
    "nome": "Mario",
    cognome: "Rossi",
    età: 30 + " anni"
}
console.log(studente);
// 2 Stampare su pagina proprietà oggetto tramite for in
for(var key in studente){
    console.log(key);
    document.getElementById("lista").innerHTML+="<li>"+studente[key]+"</li>";
}
//3 Creare un array di oggetti di studenti.
var classe = [
    {"nome": "Luigi",
    cognome: "Verdi",
    età: 35 + " anni"},
    {"nome": "Peach",
    cognome: "Rosa",
    età: 25 + " anni"},
    {"nome": "Daisy",
    cognome: "Gialli",
    età: 20 + " anni"},
    {"nome": "Yoshi",
    cognome: "Verdi",
    età: 20 + " anni"}
]