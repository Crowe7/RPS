//set all variables
let getChoice = 0;
let cpuGame = 0;
let playerGame = 0;    
let computerChoice = 0;
let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');
let pCount = parseInt(document.getElementById("pScoreResult").textContent);
let cCount = parseInt(document.getElementById("cScoreResult").textContent);
rock.addEventListener('click', playSet.bind(this , 1));
paper.addEventListener('click', playSet.bind(this, 2));
scissors.addEventListener('click', playSet.bind(this, 3));


// gets player input and prints it
function playerPlay(pChoice) {
    getChoice = pChoice
        if(getChoice === 1){
            document.getElementById("pResult").textContent = "You used Rock! \u00A0 \u00A0 \u00A0"
        }
        else if(getChoice === 2){
            document.getElementById("pResult").textContent = "You used Paper! \u00A0 \u00A0"
        }
        else if(getChoice === 3){
            document.getElementById("pResult").textContent = "You used Scissors!"
        }
}
//prints result of what computer used 
function computerSay(){
      let  computerChoice = Math.floor((Math.random() * 3) + 1);
        if(computerChoice === 1){
            document.getElementById("cResult").textContent = "CPU used Rock! \u00A0 \u00A0 \u00A0"
            return 1;
        }
        else if(computerChoice === 2){
            document.getElementById("cResult").textContent = "CPU used Paper! \u00A0 \u00A0"
            return 2;
        }
        else if(computerChoice === 3){
            document.getElementById("cResult").textContent = "CPU used Scissors!"
            return 3;
        }      
    }

//plays a round and increments the winners game count 
    function playSet(RPS){
       let pChoice = RPS;
       playerPlay(pChoice);
       let cChoice = computerSay();
      
        if (pChoice === cChoice){
            document.getElementById("winnerText").textContent = "This round is a draw.."
        }
        else if(pChoice === 1 && cChoice === 2){
            cCount++
            document.getElementById("cScoreResult").textContent = cCount
            document.getElementById("winnerText").textContent = "Computer wins this round!"
        }
        else if(pChoice === 2 && cChoice === 3){
            cCount++
            document.getElementById("cScoreResult").textContent = cCount
            document.getElementById("winnerText").textContent = "Computer wins this round!"
        }
        else if(pChoice === 3 && cChoice === 1){
            cCount++
            document.getElementById("cScoreResult").textContent = cCount
            document.getElementById("winnerText").textContent = "Computer wins this round!"
        }
        else{
            pCount++
            document.getElementById("pScoreResult").textContent = pCount
            document.getElementById("winnerText").textContent = "You win this round!"
        }
        if(pCount === 5 || cCount === 5){
            endSet();
        }
    }

    function endSet() {
            if(pCount === 5) {
                document.getElementById("winnerText").textContent = "YOU ARE WINNER!"
                removeRPS();
            }
            else if(cCount === 5) {
                document.getElementById("winnerText").textContent = "COMPUTER ARE WINNER!"
                removeRPS();
            }
        }
    
    function removeRPS() {
        rock.remove();
        paper.remove();
        scissors.remove();
        let x = document.getElementsByClassName("hide");
        let i = 0;
        for(i = 0; i < x.length; i++){
            x[i].classList.toggle('hidden');
        }

    }
  