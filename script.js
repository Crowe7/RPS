// Write a function that chooses between the three values at random
//prompt user to input one of the values, make sure it is only rock, paper, or scissors
// write second function that plays the game and prints the winner
// write a third functioin that keeps score of a first of 5 set 
//maybe use ifs in the third function that ends if either score hits 5 points
// print set winner
function computerPlay() {
return Math.floor((Math.random() * 3) + 1);
}

console.log("Hello Person!");
console.log (computerPlay())