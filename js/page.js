 if (sessionStorage.myscore == undefined){
sessionStorage.myscore=0;
document.getElementById("pscore").innerHTML = sessionStorage.myscore;
 }
 if (sessionStorage.oscore == undefined) {
sessionStorage.oscore=0;
document.getElementById("oscore").innerHTML = sessionStorage.oscore;
 }
function start(x) { 
    sessionStorage.playerschoice = x;
    var y = Math.ceil(Math.random() *3);
if (y == 1) { //if y equals 1 it means rock
    sessionStorage.opponentschoice = 'rock'; 
}
else if (y == 2) { //if y equals 2 it means paper
    sessionStorage.opponentschoice = 'paper'
}
else if (y == 3) { //if y equals 3 it means scissors
    sessionStorage.opponentschoice = 'scissors'
}
if ((sessionStorage.playerschoice == 'rock') && (sessionStorage.opponentschoice == 'paper')) {
sessionStorage.result = 'lose';
}
else if ((sessionStorage.playerschoice == 'rock') && (sessionStorage.opponentschoice == 'scissors')){
    sessionStorage.result = 'won';   
}
else if ((sessionStorage.playerschoice == 'paper') && (sessionStorage.opponentschoice == 'scissors')){
    sessionStorage.result = 'lose';   
}
else if ((sessionStorage.playerschoice == 'paper') && (sessionStorage.opponentschoice == 'rock')){
    sessionStorage.result = 'won';   
}
else if ((sessionStorage.playerschoice == 'scissors') && (sessionStorage.opponentschoice == 'rock')){
    sessionStorage.result = 'lose';   
}
else if ((sessionStorage.playerschoice == 'scissors') && (sessionStorage.opponentschoice == 'paper')){
    sessionStorage.result = 'won';   
}
else if (sessionStorage.playerschoice == sessionStorage.opponentschoice) { //if my choice and opponents choice equel it is tie
sessionStorage.result = 'tie';
}
if (sessionStorage.result == 'lose') {
document.getElementById('result').innerHTML='You lost. It was unfortunate';
sessionStorage.oscore++;
document.getElementById('oscore').innerHTML=sessionStorage.oscore;
}
else if (sessionStorage.result == 'won') {
    document.getElementById('result').innerHTML='Good job. You won!';
    sessionStorage.myscore++;
    document.getElementById('pscore').innerHTML=sessionStorage.myscore;
 }
else if (sessionStorage.result == 'tie') {
    document.getElementById('result').innerHTML='It is tie. Try again!';
}
document.getElementById('o-img').src='svg/' + sessionStorage.opponentschoice + '.svg';
 }
