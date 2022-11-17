 function start(x) { 
    sessionStorage.playerschoice = x;
    var y = Math.ceil(Math.random() *3);
if (y == 1) { //if y equals 1 it means rock
    sessionStorage.opponentsschoice = 'rock'; 
}
else if (y == 2) { //if y equals 2 it means paper
    sessionStorage.opponentsschoice = 'paper'
}
else if (y == 3) { //if y equals 3 it means scissors
    sessionStorage.opponentsschoice = 'scissors'
}
if ((sessionStorage.playerschoice == 'rock') && (sessionStorage == 'paper')) {
sessionStorage.result = 'lose';
}
else if ((sessionStorage.playerschoice == 'rock') && (sessionStorage == 'scissors')){
    sessionStorage.result = 'won';   
}
else if ((sessionStorage.playerschoice == 'paper') && (sessionStorage == 'scissors')){
    sessionStorage.result = 'lose';   
}
else if ((sessionStorage.playerschoice == 'paper') && (sessionStorage == 'rock')){
    sessionStorage.result = 'won';   
}
else if ((sessionStorage.playerschoice == 'scissors') && (sessionStorage == 'rock')){
    sessionStorage.result = 'lose';   
}
else if ((sessionStorage.playerschoice == 'scissors') && (sessionStorage == 'paper')){
    sessionStorage.result = 'won';   
}
 }
