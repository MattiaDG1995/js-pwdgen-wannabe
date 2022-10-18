let nome = prompt('scrivi il tuo nome:');

let cognome = prompt('scrivi il tuo cognome:');

let colore = prompt('scrivi il tuo colore preferito:');

let numero = prompt('scrivi il tuo numero preferito:');

document.getElementById('password').innerHTML = `La tua password insicurissima è: ${nome}${cognome}${colore}${numero}`;

