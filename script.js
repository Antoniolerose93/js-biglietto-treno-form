console.log('biglietto')

//Il programma dovrà mostrare una form da compilare usando i corretti 
// campi HTML di input con cui chiedere all’utente il numero di chilometri 
// che vuole percorrere e lo sconto da applicare scegliendo tra 3 opzioni:
// prezzo intero
// sconto studente
// sconto over 65
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio,
// secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// Il recap dei dati e l’output del prezzo finale va stampato in pagina 
// (formattato con massimo due decimali, per indicare centesimi sul prezzo).


//1. Dichiaro le variabili che utilizzerò per calcolare gli sconti e il prezzo finale
const chilometri = document.getElementById ('chilometri')
const tipoUtente = document.getElementById ('persona')
const buttonCalcola = document.getElementById ('calcola')
const prezzoFinale = document.getElementById('risultato')

buttonCalcola.addEventListener('click', function () {
    console.log('calcola il prezzo')

//2 Calcolo il prezzo base
// const distanza = parseFloat('Inserisci il numero di km da percorrere')
const prezzoKm = 0.21
const prezzoBase = chilometri * prezzoKm
console.log(prezzoBase)


//3. Leggiamo i dati inseriti dall'utente
const persona = tipoUtente
console.log(persona)

// 4. Poniamo le condizioni per la scontistica

let pctSconto = 0

if (persona === 'Over65'){
    pctSconto = 20 
}  else if (persona === 'Studente') {
        pctSconto = 40
} 
console.log(pctSconto)

// 5. Calcolo il prezzo finale
 const sconto = (pctSconto * prezzoBase) / 100
 const prezzoViaggio = prezzoBase - sconto
 console.log(prezzoViaggio)

prezzoFinale.innerHTML = prezzoViaggio.toFixed(2)

})