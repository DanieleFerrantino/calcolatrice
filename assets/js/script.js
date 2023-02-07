/* SPIEGAZIONE


Questo codice utilizza i seguenti operatori:

L'operatore di assegnazione (=) per inizializzare le variabili (display, numero1, oper e numero2).
L'operatore di concatenazione (+) per aggregare stringhe nella variabile "display".
L'operatore di uguaglianza (==) per verificare se "oper" è undefined.
L'operatore di sottrazione (-) per effettuare la sottrazione tra numero1 e numero2.
L'operatore di moltiplicazione (*) per effettuare la moltiplicazione tra numero1 e numero2.
Inoltre, questo codice utilizza:

Le funzioni per raggruppare il codice che esegue un'operazione specifica.
Gli if statement per effettuare un'operazione solo se una determinata condizione è vera.
La funzione parseInt() per convertire stringhe in numeri. */





// Inizializzare variabili display, numero1, oper e numero2
let display = '';
let numero1;
let oper;
let numero2;

// La funzione displayf() cambia il valore di display nella pagina HTML
function displayf(param) {
    // Seleziona l'elemento HTML con ID "displaynum"
    let calcolo = document.querySelector('#displaynum');
    // Imposta il valore di testo dell'elemento selezionato con il valore di "param"
    calcolo.textContent = param;
}

// La funzione numero() inserisce un numero nella variabile "display"
function numero(num) {
    // Aggiungi il numero alla stringa "display"
    display += num;
    // Chiamare la funzione displayf() con il valore attuale di "display"
    displayf(display);
}

// La funzione operatore() inserisce un operatore nella variabile "oper"
function operatore(operp) {
    // Se "oper" è undefined, allora questo è il primo operatore inserito
    if (oper == undefined) {
        // Impostare "numero1" come il valore corrente di "display"
        numero1 = display;
        // Impostare "oper" come l'operatore passato
        oper = operp;
        // Azzerare "display"
        display = '';
        // Mostrare "numero1" e "oper" sul display
        displayf(numero1 + oper);
    } else {
        // Altrimenti, questo è il secondo operatore inserito
        // Impostare "numero2" come il valore corrente di "display"
        numero2 = display;
        // Convertire "numero1" e "numero2" da stringa a numero
        numero1 = parseInt(numero1);
        numero2 = parseInt(numero2);
        // Verificare quale operatore è stato inserito e calcolare il risultato
        if (oper == '+') {
            let risultato = numero1 + numero2;
            // Mostrare il risultato sul display
            displayf(risultato);
            // Azzerare "display"
            display = '';
            // Impostare "oper" come undefined
            oper = undefined;
        }
        if (oper == '-') {
            let risultato = numero1 - numero2;
            // Mostrare il risultato sul display
            displayf(risultato);
            display = '';
            // Azzerare "display"
            oper = undefined;
            // Impostare "oper" come undefined
        }
        if (oper == '*') {
            let risultato = numero1 * numero2;
            // Mostrare il risultato sul display
            displayf(risultato);
            display = '';
            // Azzerare "display"
            oper = undefined;
            // Impostare "oper" come undefined
        }
    }
}