// Import stylesheets
import './style.css';

// Write Javascript code!

// Array contenente gli oggetti con autore e titolo dei libri
const biblioteca = [
  { autore: "Dante Alighieri", titolo: "Divina Commedia" },
  { autore: "Alessandro Manzoni", titolo: "I Promessi Sposi" },
  { autore: "Boccaccio", titolo: "Decameron" }
];

// Sequenza di caratteri da cercare nei titoli
const stringaDaCercare = "iv";

// Filtrare i libri che corrispondono alla sequenza di caratteri
const libriCorrispondenti = biblioteca.filter(libro => libro.titolo.toLowerCase().includes(stringaDaCercare.toLowerCase()));

// Se corrisponde solo un libro, visualizzare autore e titolo, altrimenti il numero di libri corrispondenti
let contenuto;
if (libriCorrispondenti.length === 1) {
  contenuto = "Autore: "+ libriCorrispondenti[0].autore + " | Titolo: " + libriCorrispondenti[0].titolo;
} else {
  contenuto = "Numero di libri corrispondenti: " + libriCorrispondenti.length;
}


const appDiv = document.getElementById('app');
appDiv.innerHTML = contenuto;