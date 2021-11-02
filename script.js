//set all variables
let getChoice = 0;
let cpuGame = 0;
let playerGame = 0;    
let computerChoice = 0;
// gets player input and prints it
function playerPlay() {
    getChoice = prompt("Enter: Rock, Paper, or Scissors to play!");
         while(getChoice === null){
            getChoice = prompt("Enter: Rock, Paper, or Scissors to play!");
    }
    getChoice.toLowerCase();
        if(getChoice === "rock"){
            console.log(`You used ${getChoice}!`);
            getChoice = 1;
        }
        else if(getChoice === "paper"){
            console.log(`You used ${getChoice}!`);
            getChoice = 2;
        }
        else if(getChoice === "scissors"){
            console.log(`You used ${getChoice}!`);
            getChoice = 3;
        }
        else{
            alert("Enter only Rock, Paper, or Scissors!");
            playerPlay();
        }
}
//generates the input from the computer
function computerPlay() {
    return Math.floor((Math.random() * 3) + 1);
}
//prints result of what computer used 
function computerSay(){
        if(getChoice === null){

        }
        else if(computerChoice === 1){
            console.log("Computer used rock!");
        }
        else if(computerChoice === 2){
            console.log("Computer used paper!");
        }
        else if(computerChoice === 3){
            console.log("Computer used scissors!");
        }      
        else{
            computerSay();
        }
        
    }

//plays a round and increments the winners game count 
    function playSet(){
        playerPlay();
        computerSay();
        if (getChoice === computerChoice){
            console.log("Tie!");
            playSet();
        }
        else if(getChoice === 1 && computerChoice === 2){
            cpuGame++
            console.log("Computer wins this round!");
        }
        else if(getChoice === 2 && computerChoice === 3){
            cpuGame++
            console.log("Computer wins this round!");
        }
        else if(getChoice === 3 && computerChoice === 1){
            cpuGame++
            console.log("Computer wins this round!");
        }
        else if(getChoice === null){
            console.log("nobody wins :(");
        }
        else{
            playerGame++
            console.log("You win this round!");

        }
    }
//plays the full best of 5 set by setting the cpu each time with computer choice, then when either player hits 5 games won stops the loop
function set(){
    for (let i = 0; i < 9; i++){
        computerChoice = computerPlay();
        playSet();
            if(playerGame === 5){
                alert('You win!');
                break;
            }
            else if(cpuGame === 5){
                alert("Computer wins!");
                break;
            }
            else{

            }
        }
    }
// set();