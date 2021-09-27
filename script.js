// Write a function that chooses between the three values at random
//prompt user to input one of the values, make sure it is only rock, paper, or scissors
// write second function that plays the game and prints the winner
// write a third functioin that keeps score of a first of 5 set 
//maybe use ifs in the third function that ends if either score hits 5 points
// print set winner

//randomly generate 1-3 for computer play
function computerPlay() {
return Math.floor((Math.random() * 3) + 1);
}
// get player choice that we will convert to a int to compare with computer
let getChoice = prompt("Enter: R, P, or S to play!").toLowerCase();
    if(getChoice === "r"){
        getChoice = 1;
        console.log(getChoice);
    }
    else{
        alert("Enter only R,P, or S!");
    }

  function convertChoice(){
      if(getChoice === "r"){
          getChoice.charCodeAt(0);
      }
      else if(getChoice === "p"){
          
      }
  }

console.log("Hello Person!");
