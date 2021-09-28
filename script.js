// Write a function that chooses between the three values at random
//prompt user to input one of the values, make sure it is only rock, paper, or scissors
// write second function that plays the game and prints the winner
// write a third functioin that keeps score of a first of 5 set 
//maybe use ifs in the third function that ends if either score hits 5 points
// print set winner

//randomly generate 1-3 for computer play



// get player choice that we will convert to a int to compare with computer
let getChoice = 0;
let cpuGame = 0;
let playerGame = 0;    
const playerChoice = playerPlay();
const computerChoice = computerPlay(); 
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
        }
}
function computerPlay() {
    return Math.floor((Math.random() * 3) + 1);
}
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
            console.log("error");
            console.log(computerChoice);
        }
    


    function playSet(getChoice, computerChoice){
        if (getChoice === computerChoice){
            console.log("Tie!");
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
console.log("Hello Person!");


playSet(getChoice, computerChoice);

