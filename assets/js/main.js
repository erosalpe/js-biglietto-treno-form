const buttonSend = document.getElementById( "invia" );
const nomeCognome = document.getElementById( "nomeCognome" );
const distanza = document.getElementById( "distanzaPercorsa" );
const età = document.getElementById( "età" );
const bigliettoPersonale = document.getElementById( "bigliettoPersonale" );
const costoAlKm = 0.21;
var costoBigliettoTotale = 0;

buttonSend.addEventListener( "click", function(){
    let nomeCognomeUtente = document.getElementById( "nomeCognome" ).value;
    let etàUtente = document.getElementById( "età" ).value;
    let distanzaPercorsaUtente = document.getElementById( "distanzaPercorsa" ).value;
    let costoBiglietto = distanzaPercorsaUtente * costoAlKm;


    if(etàUtente === "Over65"){
        costoBigliettoTotale = costoBiglietto * 0.6;
        document.getElementById( "offerta" ).innerHTML = `Over65`;
    } else if (etàUtente === "Minorenne"){
        costoBigliettoTotale = costoBiglietto * 0.8;
        document.getElementById( "offerta" ).innerHTML = `Minorenne`;
    } else {
        costoBigliettoTotale = costoBiglietto;
        document.getElementById( "offerta" ).innerHTML = "Maggiorenne";
    }

    document.getElementById( "nomePasseggero" ).innerHTML = `${nomeCognomeUtente}`;
    document.getElementById( "costoBiglietto" ).innerHTML = `${costoBigliettoTotale.toFixed(2)} €`;

    let codiceCp = Math.floor((Math.random() * 99999) + 10000);
    let carrozza = Math.floor((Math.random() * 20) + 1);


    document.getElementById( "codiceCp" ).innerHTML = `${codiceCp}`;
    document.getElementById( "carrozza" ).innerHTML = `${carrozza}`;

    bigliettoPersonale.className = "d-block";
    
})

